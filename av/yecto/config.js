const config = {

    // "Random Video"-Configuration

    "General": {

        // List of all available videos (e.g. '['video1.mp4', 'video2.ogg', 'video3.mov']')
        // See below if you want to use URLs instead of filenames.
        'Items': [
            'https://reppos.github.io/puertas.mp4',
            'https://reppos.github.io/c.mp4',
            'https://reppos.github.io/d.mp4',
            'https://reppos.github.io/e.mp4',
            'https://reppos.github.io/f.mp4',
            'https://reppos.github.io/b.mp4',
            'https://reppos.github.io/g.mp4',
            'https://reppos.github.io/h.mp4',
            'https://reppos.github.io/i.mp4',
            'https://reppos.github.io/j.mp4'
        ],
        // Folder path (e.g. 'videos/' or 'folder1/folder2/')
        // If you want to put urls in the item list, leave this empty ('').
        'Folder': '',
        // Redirects to video (autoplay with sound & video-controls, but will not loop & fit to viewport)
        // Note: "Video" settings will be ignored when this is set to true.
        'Redirect': false

    },

    "Video": {

        // Open video in fullscreen (only works when user clicks play)
        // Note: Autoplay will be set to false and controls to true if you have this enabled.
        'Fullscreen': false,
        // Enable autoplay (will mute the video on playback)
        'Autoplay': true,
        // Display video-controls (e.g. playhead, volume-slider, etc.)
        'Controls': true,

        // Loops the video (plays it over and over)
        'Loop': true
    }
};