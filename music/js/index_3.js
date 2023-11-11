//播放列表
var music_list_3 = [
  {
    id: "1",
    name: "待更新",
    singer: "等等我",
    duration: "00:00",
    src: "#",
  },
  {
    id: "2",
    name: "待更新",
    singer: "等等我",
    duration: "00:00",
    src: "#",
  },
  {
    id: "3",
    name: "待更新",
    singer: "等等我",
    duration: "00:00",
    src: "#",
  },
  {
    id: "4",
    name: "待更新",
    singer: "等等我",
    duration: "00:00",
    src: "#",
  },
  {
    id: "5",
    name: "待更新",
    singer: "等等我",
    duration: "00:00",
    src: "#",
  },
  {
    id: "6",
    name: "待更新",
    singer: "等等我",
    duration: "00:00",
    src: "#",
  },
  {
    id: "7",
    name: "待更新",
    singer: "等等我",
    duration: "00:00",
    src: "#",
  },
  {
    id: "8",
    name: "待更新",
    singer: "等等我",
    duration: "00:00",
    src: "#",
  },
  {
    id: "9",
    name: "待更新",
    singer: "等等我",
    duration: "00:00",
    src: "#",
  },
  {
    id: "10",
    name: "待更新",
    singer: "等等我",
    duration: "00:00",
    src: "#",
  },
];

//formateTime(61)--->01:01

//获取各种标签

var player_3 = document.querySelector("#player_3");
var bz_music_3 = document.querySelector("#bz_music_3");

//歌曲信息部分

var list_title_3 = document.querySelector("#list_title_3");
var list_singer_3 = document.querySelector("#list_singer_3");
var process_slide_3 = document.querySelector("#process_slide_3");
var process_3 = document.querySelector("#process_3");
var showHide_3 = document.querySelector("#showHide_3");

//控制按钮部分
var time_3 = document.querySelector("#time_3");
var btnPlay_3 = document.querySelector("#btnPlay_3");
var volume_slide_3 = document.querySelector("#volume_slide_3");
var volume_3 = document.querySelector("#volume_3");

//播放列表部分
var play_list3 = document.querySelector("#play_list_3");

var play_list_area_3 = document.querySelector("#play_list_area_3");

//动态加载播放列表
function loadPlayList_3() {
  //遍历播放列表
  for (var i = 0; i < music_list_3.length; i++) {
    //将每个对象，分别存到music中
    var music_3 = music_list_3[i];
    //创建li标签
    var liTag_3 = document.createElement("li");
    //创建歌曲名span标签
    var spanTitleTag_3 = document.createElement("span");
    //创建时长span标签
    var spanDurationTag_3 = document.createElement("span");

    //为ul添加li标签，子节点
    play_list_3.appendChild(liTag_3);
    //为li标签，添加子节点
    liTag_3.appendChild(spanTitleTag_3);
    liTag_3.appendChild(spanDurationTag_3);

    //添加内容
    spanTitleTag_3.innerHTML = music_3.name;
    spanDurationTag_3.innerHTML = music_3.duration;

    //添加类名
    spanTitleTag_3.classList.add("list_title");
    spanDurationTag_3.classList.add("list_time");

    //自定义属性
    //需要用的时候，直接从标签中取值，不需要和后台交互
    liTag_3.setAttribute("data-index", i);

    //当点击每一个li标签的时候
    //重新载入歌曲信息(专辑图片、歌曲路径、歌曲名、歌手名)
    //播放当前点击的音乐
    liTag_3.addEventListener("click", function () {
      //获取每个li标签的歌曲id
      var index_3 = this.getAttribute("data-index");
      //              console.log(index);
      //将歌曲id赋给，全局变量play_index
      play_index_3 = index_3;
      //调用载入歌曲函数
      loadMusic_3();
      //播放音乐
      playMusic_3();
    });
  }
}

//载入歌曲信息
function loadMusic_3() {
  var music_3 = music_list_3[play_index_3];
  //改变歌曲名
  list_title_3.innerHTML = music_3.name;
  //改变歌手名
  list_singer_3.innerHTML = music_3.singer;
  //改变歌曲路径
  player_3.src = music_3.src;
}

//播放,暂停音乐
btnPlay_3.addEventListener("click", function () {
  //paused,表示当前音乐是否为暂停状态
  if (player_3.paused) {
    //play(),播放当前音乐
    playMusic_3();
  } else {
    //pause(),暂停当前音乐
    player_3.pause();
    btnPlay_3.setAttribute("class", "btn_play fa fa-play");
  }
  if (!player_1.paused) {
    //play(),播放当前音乐
    player_1.pause();
    btnPlay_1.setAttribute("class", "btn_play fa fa-play");
  }
  if (!player_2.paused) {
    //play(),播放当前音乐
    player_2.pause();
    btnPlay_2.setAttribute("class", "btn_play fa fa-play");
  }
});

//上一曲
function backword_3() {
  if (play_index_3 == 0) {
    play_index_3 = music_list_3.length - 1;
  } else {
    //改变播放序号
    play_index_3--;
  }
  //重新载入
  loadMusic_3();
  //播放
  playMusic_3();
}

//下一曲
function forward_3() {
  if (play_index_3 == music_list_3.length - 1) {
    play_index_3 = 0;
  } else {
    //改变播放序号
    play_index_3++;
  }
  //重新载入
  loadMusic_3();
  //播放
  playMusic_3();
}

//播放
function playMusic_3() {
  player_3.play();
  btnPlay_3.setAttribute("class", "btn_play fa fa-pause");
}

//时间转换

function formateTime_3(time) {
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
  time_3.innerHTML = formateTime_3(player_3.currentTime);
  //duration,当前音乐的总时长,秒数!!!
  var percent_3 = player_3.currentTime / player_3.duration;
  //      console.log(percent);
  process_slide_3.style.width = percent_3 * 100 + "%";
}, 100);

//静音
function volumeOff_3() {
  //volume,[0,1]
  player_3.volume = 0;
  volume_slide_3.style.width = 0;
  console.log(player_3.volume);
}

//最大音
function volumeUp_3() {
  player_3.volume = 1;
  volume_slide_3.style.width = "100%";
  console.log(player_3.volume);
}

//通过滑块控制音量大小
volume_3.addEventListener("click", function (event) {
  //得到当前点击的位置
  var currentVolume_3 = event.offsetX / this.offsetWidth;
  console.log(currentVolume_3);
  //设置音量
  player_3.volume = currentVolume_3;
  volume_slide_3.style.width = currentVolume_3 * 100 + "%";
});

//通过滑块控制音乐进度
process_3.addEventListener("click", function (event) {
  //计算点击位置的百分比
  var currentValue_3 = event.offsetX / this.offsetWidth;

  //因为我们已经设置了定时器,在实时监控我们当前音乐的变化
  //因此,我们通过设置当前播放的音乐时长,影响我们的进度条
  player_3.currentTime = player_3.duration * currentValue_3;
});

//显示隐藏播放列表
function showMusicList_3() {
  //当前已经显示播放列表
  if (flag_3) {
    play_list_area_3.style.display = "none";
    bz_music_3.style.height = "400px";
    showHide_3.style.color = "#666";
    flag_3 = 0;
  } else {
    play_list_area_3.style.display = "block";
    bz_music_3.style.height = "500px";
    showHide_3.style.color = "#DDD";
    play_list_area_3.style.height = "150px";
    play_list_area_3.style.width = "400px";
    flag_3 = 1;
  }
}

function showMusicAll_3() {
  if (s_3 == 1) {
    bz_music_1.style.display = "none";
    bz_music_2.style.display = "none";
    bz_music_3.style.display = "block";
    player_1.pause();
    btnPlay_1.setAttribute("class", "btn_play fa fa-play");
    player_2.pause();
    btnPlay_2.setAttribute("class", "btn_play fa fa-play");
    s_3 = 0;
    s_1 = 1;
    s_2 = 1;
  } else {
    bz_music_3.style.display = "none";
    player_3.pause();
    btnPlay_3.setAttribute("class", "btn_play fa fa-play");
    s_3 = 1;
  }
}

//初始化
//载入播放列表
loadPlayList_3();
//播放序号
var play_index_3 = 0;
//初始音量
player_3.volume = 0.5;
//初始化显示播放列表
//当flag为1的时候,表示列表显示(当前状态)
//当flag为0的时候,表示列表隐藏(当前状态)
var flag_3 = 0;
// s為1時隱藏，0時出現音樂撥放器。
var s_3 = 1;
