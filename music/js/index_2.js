//播放列表
var music_list_2 = [
  {
    id: "1",
    name: "Letting go",
    singer: "蔡健雅",
    duration: "00:30",
    src: "./music/audio/piano/蔡健雅-Letting go.mp3",
  },
  {
    id: "2",
    name: "淘汰",
    singer: "陳奕迅",
    duration: "00:32",
    src: "./music/audio/piano/陳奕迅-淘汰.mp3",
  },
  {
    id: "3",
    name: "擱淺",
    singer: "周杰倫",
    duration: "00:32",
    src: "./music/audio/piano/周杰倫-擱淺.mp3",
  },
  {
    id: "4",
    name: "輸了你贏了世界又如何",
    singer: "林俊傑",
    duration: "00:32",
    src: "./music/audio/piano/林俊傑-輸了你贏了世界又如何.mp3",
  },
  {
    id: "5",
    name: "千千萬萬",
    singer: "深海魚子醬",
    duration: "00:19",
    src: "./music/audio/piano/千千萬萬.mp3",
  },
  {
    id: "6",
    name: "永不失聯的愛",
    singer: "周興哲",
    duration: "01:35",
    src: "./music/audio/piano/永不失聯的愛.mp3",
  },
  {
    id: "7",
    name: "天外來物",
    singer: "薛之謙",
    duration: "00:45",
    src: "./music/audio/piano/天外來物.mp3",
  },
  {
    id: "8",
    name: "說說話",
    singer: "王靖雯",
    duration: "00:50",
    src: "./music/audio/piano/說說話.mp3",
  },
  {
    id: "9",
    name: "Flashlight",
    singer: "Jessie J",
    duration: "01:35",
    src: "./music/audio/piano/Flashlight.mp3",
  },
  {
    id: "10",
    name: "理想情人",
    singer: "楊丞琳",
    duration: "00:36",
    src: "./music/audio/piano/理想情人.mp3",
  },
];

//formateTime(61)--->01:01

//获取各种标签

var player_2 = document.querySelector("#player_2");
var bz_music_2 = document.querySelector("#bz_music_2");

//歌曲信息部分

var list_title_2 = document.querySelector("#list_title_2");
var list_singer_2 = document.querySelector("#list_singer_2");
var process_slide_2 = document.querySelector("#process_slide_2");
var process_2 = document.querySelector("#process_2");
var showHide_2 = document.querySelector("#showHide_2");

//控制按钮部分
var time_2 = document.querySelector("#time_2");
var btnPlay_2 = document.querySelector("#btnPlay_2");
var volume_slide_2 = document.querySelector("#volume_slide_2");
var volume_2 = document.querySelector("#volume_2");

//播放列表部分
var play_list2 = document.querySelector("#play_list_2");

var play_list_area_2 = document.querySelector("#play_list_area_2");

//动态加载播放列表
function loadPlayList_2() {
  //遍历播放列表
  for (var i = 0; i < music_list_2.length; i++) {
    //将每个对象，分别存到music中
    var music_2 = music_list_2[i];
    //创建li标签
    var liTag_2 = document.createElement("li");
    //创建歌曲名span标签
    var spanTitleTag_2 = document.createElement("span");
    //创建时长span标签
    var spanDurationTag_2 = document.createElement("span");

    //为ul添加li标签，子节点
    play_list_2.appendChild(liTag_2);
    //为li标签，添加子节点
    liTag_2.appendChild(spanTitleTag_2);
    liTag_2.appendChild(spanDurationTag_2);

    //添加内容
    spanTitleTag_2.innerHTML = music_2.name;
    spanDurationTag_2.innerHTML = music_2.duration;

    //添加类名
    spanTitleTag_2.classList.add("list_title");
    spanDurationTag_2.classList.add("list_time");

    //自定义属性
    //需要用的时候，直接从标签中取值，不需要和后台交互
    liTag_2.setAttribute("data-index", i);

    //当点击每一个li标签的时候
    //重新载入歌曲信息(专辑图片、歌曲路径、歌曲名、歌手名)
    //播放当前点击的音乐
    liTag_2.addEventListener("click", function () {
      //获取每个li标签的歌曲id
      var index_2 = this.getAttribute("data-index");
      //              console.log(index);
      //将歌曲id赋给，全局变量play_index
      play_index_2 = index_2;
      //调用载入歌曲函数
      loadMusic_2();
      //播放音乐
      playMusic_2();
    });
  }
}

//载入歌曲信息
function loadMusic_2() {
  var music_2 = music_list_2[play_index_2];
  //改变歌曲名
  list_title_2.innerHTML = music_2.name;
  //改变歌手名
  list_singer_2.innerHTML = music_2.singer;
  //改变歌曲路径
  player_2.src = music_2.src;
}

//播放,暂停音乐
btnPlay_2.addEventListener("click", function () {
  //paused,表示当前音乐是否为暂停状态
  if (player_2.paused) {
    //play(),播放当前音乐
    playMusic_2();
  } else {
    //pause(),暂停当前音乐
    player_2.pause();
    btnPlay_2.setAttribute("class", "btn_play fa fa-play");
  }
  if (!player_1.paused) {
    //play(),播放当前音乐
    player_1.pause();
    btnPlay_1.setAttribute("class", "btn_play fa fa-play");
  }
  if (!player_3.paused) {
    //play(),播放当前音乐
    player_3.pause();
    btnPlay_3.setAttribute("class", "btn_play fa fa-play");
  }
});

//上一曲
function backword_2() {
  if (play_index_2 == 0) {
    play_index_2 = music_list_2.length - 1;
  } else {
    //改变播放序号
    play_index_2--;
  }
  //重新载入
  loadMusic_2();
  //播放
  playMusic_2();
}

//下一曲
function forward_2() {
  if (play_index_2 == music_list_2.length - 1) {
    play_index_2 = 0;
  } else {
    //改变播放序号
    play_index_2++;
  }
  //重新载入
  loadMusic_2();
  //播放
  playMusic_2();
}

//播放
function playMusic_2() {
  player_2.play();
  btnPlay_2.setAttribute("class", "btn_play fa fa-pause");
}

//时间转换

function formateTime_2(time) {
  if (time > 3600) {
    var hour = parseInt(time / 3600);
    var minute = parseInt((time % 3600) / 60);
    var second = parseInt(time % 3600);
    hour = hour >= 10 ? hour : "0" + hour;
    minute = minute >= 10 ? minute : "0" + minute;
    second = second >= 10 ? second : "0" + second;
    return hour + ":" + minute + ":" + second;
  } else {
    var minute = parseInt(time / 60);
    var second = parseInt(time % 60);
    minute = minute >= 10 ? minute : "0" + minute;
    second = second >= 10 ? second : "0" + second;
    return minute + ":" + second;
  }
}

//设置定时器
window.setInterval(function () {
  //currentTime,当前播放的秒数!
  //      console.log(player.currentTime);
  time_2.innerHTML = formateTime_2(player_2.currentTime);
  //duration,当前音乐的总时长,秒数!!!
  var percent_2 = player_2.currentTime / player_2.duration;
  //      console.log(percent);
  process_slide_2.style.width = percent_2 * 100 + "%";
}, 100);

//静音
function volumeOff_2() {
  //volume,[0,1]
  player_2.volume = 0;
  volume_slide_2.style.width = 0;
  console.log(player_2.volume);
}

//最大音
function volumeUp_2() {
  player_2.volume = 1;
  volume_slide_2.style.width = "100%";
  console.log(player_2.volume);
}

//通过滑块控制音量大小
volume_2.addEventListener("click", function (event) {
  //得到当前点击的位置
  var currentVolume_2 = event.offsetX / this.offsetWidth;
  console.log(currentVolume_2);
  //设置音量
  player_2.volume = currentVolume_2;
  volume_slide_2.style.width = currentVolume_2 * 100 + "%";
});

//通过滑块控制音乐进度
process_2.addEventListener("click", function (event) {
  //计算点击位置的百分比
  var currentValue_2 = event.offsetX / this.offsetWidth;

  //因为我们已经设置了定时器,在实时监控我们当前音乐的变化
  //因此,我们通过设置当前播放的音乐时长,影响我们的进度条
  player_2.currentTime = player_2.duration * currentValue_2;
});

//显示隐藏播放列表
function showMusicList_2() {
  //当前已经显示播放列表
  if (flag_2) {
    play_list_area_2.style.display = "none";
    bz_music_2.style.height = "400px";
    showHide_2.style.color = "#666";
    flag_2 = 0;
  } else {
    play_list_area_2.style.display = "block";
    bz_music_2.style.height = "500px";
    showHide_2.style.color = "#DDD";
    play_list_area_2.style.height = "150px";
    play_list_area_2.style.width = "400px";
    flag_2 = 1;
  }
}

function showMusicAll_2() {
  if (s_2 == 1) {
    bz_music_1.style.display = "none";
    bz_music_2.style.display = "block";
    bz_music_3.style.display = "none";
    player_1.pause();
    btnPlay_1.setAttribute("class", "btn_play fa fa-play");
    player_3.pause();
    btnPlay_3.setAttribute("class", "btn_play fa fa-play");
    s_2 = 0;
    s_1 = 1;
    s_3 = 1;
  } else {
    bz_music_2.style.display = "none";
    player_2.pause();
    btnPlay_2.setAttribute("class", "btn_play fa fa-play");
    s_2 = 1;
  }
}

//初始化
//载入播放列表
loadPlayList_2();
//播放序号
var play_index_2 = 0;
//初始音量
player_2.volume = 0.5;
//初始化显示播放列表
//当flag为1的时候,表示列表显示(当前状态)
//当flag为0的时候,表示列表隐藏(当前状态)
var flag_2 = 0;
// s為1時隱藏，0時出現音樂撥放器。
var s_2 = 1;
