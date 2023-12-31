const options = {
  //audio lists model
  audioLists: [
    {
      name: "Pluxt 6712",
      singer: "Steven Hue",
      cover: "//" + window.location.host + "/images/dale.jpg",
      //musicSrc: "//music/Pluxt_6712.mp3"
      musicSrc: () => {
        return Promise.resolve("//" + window.location.host + "/music/Pluxt_6712.mp3")
      },
    },
    {
      name: "SMPL-CRT_04.5_DOSSERTRASS_02",
      singer: "Steven Hue",
      cover: "//" + window.location.host + "/images/dale.jpg",
      //musicSrc: "//music/Pluxt_6712.mp3"
      musicSrc: () => {
        return Promise.resolve("//" + window.location.host + "/music/SMPL-CRT_04.5_DOSSERTRASS_02.mp3")
      },
    }
  ],

  //default play index of the audio player  [type `number` default `0`]
  defaultPlayIndex: 0,

  //if you want dynamic change current play audio you can change it [type `number` default `0`]
  // playIndex: 0,

  //color of the music player theme    [ type `string: 'light' or 'dark'  ` default 'dark' ]
  theme: "dark",

  // Specifies movement boundaries. Accepted values:
  // - `parent` restricts movement within the node's offsetParent
  //    (nearest node with position relative or absolute), or
  // - a selector, restricts movement within the targeted node
  // - An object with `left, top, right, and bottom` properties.
  //   These indicate how far in each direction the draggable
  //   can be moved.
  bounds: "body",

  //Whether to load audio immediately after the page loads.  [type `Boolean | String`, default `false`]
  //"auto|metadata|none" "true| false"
  preload: true,

  //Whether the player's background displays frosted glass effect  [type `Boolean`, default `false`]
  glassBg: false,

  //The next time you access the player, do you keep the last state  [type `Boolean` default `false`]
  remember: false,

  //The Audio Can be deleted  [type `Boolean`, default `true`]
  remove: false,

  //audio controller initial position    [ type `Object` default '{top:0,left:0}' ]
  defaultPosition: {
    // top: 300,
    // left: 120
    right: 0,
    top: 90,
  },

  // play mode text config of the audio player
  playModeText: {
    order: "In Order",
    orderLoop: "List Loop",
    singleLoop: "Track Loop",
    shufflePlay: "Shuffle"
  },

  //audio controller open text  [ type `String | ReactNode` default 'open']
  openText: "Open",

  //audio controller close text  [ type `String | ReactNode` default 'close']
  closeText: "Close",

  //audio theme switch checkedText  [ type `String | ReactNode` default '-']
  checkedText: "Checked",

  //audio theme switch unCheckedText [ type `String | ReactNode` default '-']
  unCheckedText: "Unchecked",

  // audio list panel show text of the playlist has no songs [ type `String` | ReactNode  default 'no music']
  notContentText: "No Content",

  panelTitle: "Panel",

  defaultPlayMode: "order",

  //audio mode        mini | full          [type `String`  default `mini`]
  mode: "mini",

  /**
   * [ type `Boolean` default 'false' ]
   * The default audioPlay handle function will be played again after each pause, If you only want to trigger it once, you can set 'true'
   */
  once: false,

  //Whether the audio is played after loading is completed. [type `Boolean` default 'true']
  autoPlay: false,

  //Whether you can switch between two modes, full => mini  or mini => full   [type 'Boolean' default 'true']
  toggleMode: true,

  //audio cover is show of the "mini" mode [type `Boolean` default 'true']
  showMiniModeCover: false,

  //audio playing progress is show of the "mini"  mode
  showMiniProcessBar: false,

  //audio controller is can be drag of the "mini" mode     [type `Boolean` default `true`]
  drag: true,

  //drag the audio progress bar [type `Boolean` default `true`]
  seeked: true,

  //audio controller title [type `String | ReactNode`  default <FaHeadphones/>]
  //controllerTitle: "Title",

  //Displays the audio load progress bar.  [type `Boolean` default `true`]
  showProgressLoadBar: true,

  //play button display of the audio player panel   [type `Boolean` default `true`]
  showPlay: true,

  //reload button display of the audio player panel   [type `Boolean` default `true`]
  showReload: true,

  //download button display of the audio player panel   [type `Boolean` default `true`]
  showDownload: false,

  //loop button display of the audio player panel   [type `Boolean` default `true`]
  showPlayMode: true,

  //theme toggle switch  display of the audio player panel   [type `Boolean` default `true`]
  showThemeSwitch: false,

  //lyric display of the audio player panel   [type `Boolean` default `false`]
  showLyric: false,

  //Extensible custom content       [type 'Array' default '[]' ]
  extendsContent: [],

  //default volume of the audio player [type `Number` default `100` range `0-100`]
  defaultVolume: 100,

  //playModeText show time [type `Number(ms)` default `700`]
  playModeShowTime: 600,

  //Whether to try playing the next audio when the current audio playback fails [type `Boolean` default `true`]
  loadAudioErrorPlayNext: true,

  //Music is downloaded handle
  onAudioDownload(audioInfo) {
    //swal("download successfully", "", "success");
    console.log("audio download", audioInfo);
  },

  //audio play handle
  onAudioPlay(audioInfo) {
    console.log("audio playing", audioInfo);
  },

  //audio pause handle
  onAudioPause(audioInfo) {
    console.log("audio pause", audioInfo);
  },

  //When the user has moved/jumped to a new location in audio
  onAudioSeeked(audioInfo) {
    console.log("audio seeked", audioInfo);
  },

  //When the volume has changed  min = 0.0  max = 1.0
  onAudioVolumeChange(currentVolume) {
    console.log("audio volume change", currentVolume);
  },

  //The single song is ended handle
  onAudioEnded(audioInfo) {
    //swal("Audio is ended!", "", "success");
    console.log("audio ended", audioInfo);
  },

  //audio load abort The target event like {...,audioName:xx,audioSrc:xx,playMode:xx}
  onAudioAbort(e) {
    console.log("audio abort", e);
  },

  //audio play progress handle
  onAudioProgress(audioInfo) {
    // console.log('audio progress',audioInfo);
  },

  //audio reload handle
  onAudioReload(audioInfo) {
    console.log("audio reload:", audioInfo);
  },

  //audio load failed error handle
  onAudioLoadError(e) {
    //swal("audio load error", "", "error");
    console.log("audio load err", e);
  },

  //theme change handle
  onThemeChange(theme) {
    console.log("theme change:", theme);
  },

  onAudioListsChange(currentPlayId, audioLists, audioInfo) {
    console.log("[currentPlayId] audio lists change:", currentPlayId);
    console.log("[audioLists] audio lists change:", audioLists);
    console.log("[audioInfo] audio lists change:", audioInfo);
  },

  onAudioPlayTrackChange(currentPlayId, audioLists, audioInfo) {
    console.log(
      "audio play track change:",
      currentPlayId,
      audioLists,
      audioInfo
    );
  },

  onPlayModeChange(playMode) {
    console.log("play mode change:", playMode);
  },

  onModeChange(mode, IS_MOBILE) {
    console.log("mode change:", mode);
  },

  onAudioListsPanelChange(panelVisible) {
    console.log("audio lists panel visible:", panelVisible);
  },

  onAudioListsDragEnd(fromIndex, endIndex) {
    console.log("audio lists drag end:", fromIndex, endIndex);
  },

  onAudioLyricChange(lineNum, currentLyric) {
    console.log("audio lyric change:", lineNum, currentLyric);
  }
};

export default options;