const config = {

    // "Random Video"-Configuration

    "General": {

        // List of all available videos (e.g. '['video1.mp4', 'video2.ogg', 'video3.mov']')
        // See below if you want to use URLs instead of filenames.
        'Items': [
            'https://reppos.github.io/01.mp4',
            'https://reppos.github.io/03.mp4',
            'https://reppos.github.io/06.mp4',
            'https://reppos.github.io/08.mp4',
            'https://reppos.github.io/13.mp4',
            'https://reppos.github.io/15.mp4',
            'https://reppos.github.io/19.mp4',
            'https://reppos.github.io/30.mp4',
            'https://reppos.github.io/31.mp4',
            'https://reppos.github.io/33.mp4',
            'https://reppos.github.io/36.mp4',
            'https://reppos.github.io/37.mp4'


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