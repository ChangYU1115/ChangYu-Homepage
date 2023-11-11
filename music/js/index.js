//播放列表
var music_list_1 = [
  {
    id: "1",
    name: "慢冷",
    singer: "梁靜茹",
    duration: "00:41",
    src: "./music/audio/guitar/慢冷.mp3",
  },
  {
    id: "2",
    name: "7%",
    singer: "XMASwu",
    duration: "00:32",
    src: "./music/audio/guitar/123.mp3",
  },
  {
    id: "3",
    name: "冬眠",
    singer: "司南",
    duration: "00:36",
    src: "./music/audio/guitar/冬眠.mp3",
  },
  {
    id: "4",
    name: "錯季",
    singer: "秋原依",
    duration: "00:36",
    src: "./music/audio/guitar/錯季.mp3",
  },
  {
    id: "5",
    name: "白月光與朱砂痣",
    singer: "胖虎",
    duration: "00:25",
    src: "./music/audio/guitar/白月光與朱砂痣.mp3",
  },
  {
    id: "6",
    name: "要愛愛",
    singer: "王麟",
    duration: "00:20",
    src: "./music/audio/guitar/要愛愛.mp3",
  },
];

//formateTime(61)--->01:01

//获取各种标签

var player_1 = document.querySelector("#player_1");
var bz_music_1 = document.querySelector("#bz_music_1");
var bz_music_2 = document.querySelector("#bz_music_2");
var bz_music_3 = document.querySelector("#bz_music_3");

//歌曲信息部分

var list_title_1 = document.querySelector("#list_title_1");
var list_singer_1 = document.querySelector("#list_singer_1");
var process_slide_1 = document.querySelector("#process_slide_1");
var process_1 = document.querySelector("#process_1");
var showHide_1 = document.querySelector("#showHide_1");

//控制按钮部分
var time_1 = document.querySelector("#time_1");
var btnPlay_1 = document.querySelector("#btnPlay_1");
var volume_slide_1 = document.querySelector("#volume_slide_1");
var volume_1 = document.querySelector("#volume_1");

//播放列表部分
var play_list_1 = document.querySelector("#play_list_1");

var play_list_area_1 = document.querySelector("#play_list_area_1");

//动态加载播放列表
function loadPlayList_1() {
  //遍历播放列表
  for (var i = 0; i < music_list_1.length; i++) {
    //将每个对象，分别存到music中
    var music_1 = music_list_1[i];
    //创建li标签
    var liTag_1 = document.createElement("li");
    //创建歌曲名span标签
    var spanTitleTag_1 = document.createElement("span");
    //创建时长span标签
    var spanDurationTag_1 = document.createElement("span");

    //为ul添加li标签，子节点
    play_list_1.appendChild(liTag_1);
    //为li标签，添加子节点
    liTag_1.appendChild(spanTitleTag_1);
    liTag_1.appendChild(spanDurationTag_1);

    //添加内容
    spanTitleTag_1.innerHTML = music_1.name;
    spanDurationTag_1.innerHTML = music_1.duration;

    //添加类名
    spanTitleTag_1.classList.add("list_title");
    spanDurationTag_1.classList.add("list_time");

    //自定义属性
    //需要用的时候，直接从标签中取值，不需要和后台交互
    liTag_1.setAttribute("data-index", i);

    //当点击每一个li标签的时候
    //重新载入歌曲信息(专辑图片、歌曲路径、歌曲名、歌手名)
    //播放当前点击的音乐
    liTag_1.addEventListener("click", function () {
      //获取每个li标签的歌曲id
      var index_1 = this.getAttribute("data-index");
      //              console.log(index);
      //将歌曲id赋给，全局变量play_index
      play_index_1 = index_1;
      //调用载入歌曲函数
      loadMusic_1();
      //播放音乐
      playMusic_1();
    });
  }
}

//载入歌曲信息
function loadMusic_1() {
  var music_1 = music_list_1[play_index_1];
  //改变歌曲名
  list_title_1.innerHTML = music_1.name;
  //改变歌手名
  list_singer_1.innerHTML = music_1.singer;
  //改变歌曲路径
  player_1.src = music_1.src;
}

//播放,暂停音乐
btnPlay_1.addEventListener("click", function () {
  //paused,表示当前音乐是否为暂停状态
  if (player_1.paused) {
    //play(),播放当前音乐
    playMusic_1();
  } else {
    //pause(),暂停当前音乐
    player_1.pause();
    btnPlay_1.setAttribute("class", "btn_play fa fa-play");
  }
  if (!player_2.paused) {
    //play(),播放当前音乐
    player_2.pause();
    btnPlay_2.setAttribute("class", "btn_play fa fa-play");
  }
  if (!player_3.paused) {
    //play(),播放当前音乐
    player_3.pause();
    btnPlay_3.setAttribute("class", "btn_play fa fa-play");
  }
});

//上一曲
function backword_1() {
  if (play_index_1 == 0) {
    play_index_1 = music_list_1.length - 1;
  } else {
    //改变播放序号
    play_index_1--;
  }
  //重新载入
  loadMusic_1();
  //播放
  playMusic_1();
}

//下一曲
function forward_1() {
  if (play_index_1 == music_list_1.length - 1) {
    play_index_1 = 0;
  } else {
    //改变播放序号
    play_index_1++;
  }
  //重新载入
  loadMusic_1();
  //播放
  playMusic_1();
}

//播放
function playMusic_1() {
  player_1.play();
  btnPlay_1.setAttribute("class", "btn_play fa fa-pause");
}

//时间转换

function formateTime_1(time) {
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
  time_1.innerHTML = formateTime_1(player_1.currentTime);
  //duration,当前音乐的总时长,秒数!!!
  var percent_1 = player_1.currentTime / player_1.duration;
  //      console.log(percent);
  process_slide_1.style.width = percent_1 * 100 + "%";
}, 100);

//静音
function volumeOff_1() {
  //volume,[0,1]
  player_1.volume = 0;
  volume_slide_1.style.width = 0;
  console.log(player_1.volume);
}

//最大音
function volumeUp_1() {
  player_1.volume = 1;
  volume_slide_1.style.width = "100%";
  console.log(player_1.volume);
}

//通过滑块控制音量大小
volume_1.addEventListener("click", function (event) {
  //得到当前点击的位置
  var currentVolume_1 = event.offsetX / this.offsetWidth;
  console.log(currentVolume_1);
  //设置音量
  player_1.volume = currentVolume_1;
  volume_slide_1.style.width = currentVolume_1 * 100 + "%";
});

//通过滑块控制音乐进度
process_1.addEventListener("click", function (event) {
  //计算点击位置的百分比
  var currentValue_1 = event.offsetX / this.offsetWidth;

  //因为我们已经设置了定时器,在实时监控我们当前音乐的变化
  //因此,我们通过设置当前播放的音乐时长,影响我们的进度条
  player_1.currentTime = player_1.duration * currentValue_1;
});

//显示隐藏播放列表
function showMusicList_1() {
  //当前已经显示播放列表
  if (flag_1) {
    play_list_area_1.style.display = "none";
    bz_music_1.style.height = "400px";
    showHide_1.style.color = "#666";
    flag_1 = 0;
  } else {
    play_list_area_1.style.display = "block";
    bz_music_1.style.height = "500px";
    showHide_1.style.color = "#DDD";
    play_list_area_1.style.height = "150px";
    play_list_area_1.style.width = "400px";
    flag_1 = 1;
  }
}

function showMusicAll_1() {
  if (s_1 == 1) {
    bz_music_1.style.display = "block";
    bz_music_2.style.display = "none";
    bz_music_3.style.display = "none";
    player_2.pause();
    btnPlay_2.setAttribute("class", "btn_play fa fa-play");
    player_3.pause();
    btnPlay_3.setAttribute("class", "btn_play fa fa-play");
    s_1 = 0;
    s_2 = 1;
    s_3 = 1;
  } else {
    bz_music_1.style.display = "none";
    player_1.pause();
    btnPlay_1.setAttribute("class", "btn_play fa fa-play");
    s_1 = 1;
  }
}

//初始化
//载入播放列表
loadPlayList_1();
//播放序号
var play_index_1 = 0;
//初始音量
player_1.volume = 0.5;
//初始化显示播放列表
//当flag为1的时候,表示列表显示(当前状态)
//当flag为0的时候,表示列表隐藏(当前状态)
var flag_1 = 0;
// s為1時隱藏，0時出現音樂撥放器。
var s_1 = 1;
