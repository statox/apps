<script lang="ts">
    import { base } from '$app/paths';
    import { PUBLIC_API_URL } from '$env/static/public';
    import { type Chord } from '../types';
    import { visitCountsStore } from '../store';
    import { get } from 'svelte/store';
    import { toast } from '$lib/components/Toast';
    import { getAccessToken } from '$lib/auth/service';
    import { getTypeIconClass } from '../utils';
    export let chord: Chord;
    export let showArtist = false;

    let toolTipContent: string;
    visitCountsStore.subscribe((visitCountsMap) => {
        if (!visitCountsMap) {
            return;
        }
        if (visitCountsMap.has(chord.url)) {
            const data = visitCountsMap.get(chord.url)!;
            const lastVisit = new Date(data.lastAccessDateUnix * 1000);
            toolTipContent = `visits: ${data.count} - last: ${lastVisit.toLocaleDateString()}`;
        }
    });

    const text = (showArtist ? chord.artist + ' - ' : '') + chord.title;

    const formatLink = (chord: Chord) => {
        if (chord.type === 'doc') {
            return `${base}/docviewer/${chord.url}`;
        }

        return chord.url;
    };

    const addVisit = () => {
        const visitUrl = PUBLIC_API_URL + '/chords/addLinkVisit';
        const data = { url: chord.url };

        const catchError = (error: Error) => {
            const message = `<strong>Visit not counted</strong><br/> ${error.message}`;
            toast.push(message, {
                // Don't automatically dismiss to see the error when coming back
                initial: 0,
                theme: {
                    '--toastBarBackground': '#FF0000'
                }
            });
        };

        getAccessToken()
            .then((token) => {
                fetch(visitUrl, {
                    method: 'POST',
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`
                    },
                    body: JSON.stringify(data)
                })
                    .then((response) => {
                        if (response && response.status !== 200) {
                            throw new Error(response.statusText);
                        }
                        // Once we made the call and it succeeded update the store
                        // to reflect the change without having to call the API again
                        const map = get(visitCountsStore);
                        const data = map.get(chord.url) || { count: 0, lastAccessDateUnix: 0 };
                        data.count++;
                        data.lastAccessDateUnix = Date.now() / 1000;
                        map.set(chord.url, data);
                        visitCountsStore.set(map);
                    })
                    .catch(catchError);
            })
            .catch(catchError);
    };
</script>

<span class={getTypeIconClass(chord.type)}></span>
<span>
    <a
        href={formatLink(chord)}
        target="_blank"
        rel="noopener noreferrer"
        title={toolTipContent}
        on:click={addVisit}>{text}</a
    >
</span>

<style>
    .fa-file-word {
        color: #1d5af4;
    }

    .fa-file-pdf {
        color: #e82236;
    }

    .fa-link {
        color: #727171;
    }
</style>
