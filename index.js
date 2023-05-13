const messageContent = $(".msgs-content");
const messageInput = $(".msgs-input");
const messageSubmit = $(".msgs-submit");
const avatarImage = "logo.png";
const fakeMessages = [
  "Hi there, I'm Chatter and you?",
  "Nice to meet you",
  "How are you?",
  "Not too bad, thanks",
  "That's awesome",
  "Youtube is a nice place to share video",
  "I think you're a nice person",
  "Why do you think that?",
  "Can you explain?",
  "Anyway I've gotta go now",
  "It was a pleasure chat with you",
  "Time to make a new video",
  "Bye",
  ":)",
  "Hello! I'm just a software, so I don't have feelings, but I'm here to help you.",
];

let minutes = 0;
// Initialize scrollbar and display fake message on window Ioad
$(window).on("load", function () {
  messageContent.mCustomScrollBar();
  setTimeout(fakeMessage, 100);
});

// Update scrollbar to bottom and add timestamp

function updateScrollBar() {
  messageContent
    .mCustomScrollBar("update")
    .mCustomScrollBar("scrollTo", "bottom", {
      scrollInertia: 10,
      timeout: 0,
    });
}

function addTimestamp() {
  const date = new Date();
  const minutesNow = date.getMinutes();

  if (minutes !== minutesNow) {
    minutes = minutesNow;
    const timeStamp = $('<div class="timestamp"></div>').text(
      "${date.getHours()}:${minutes}"
    );
    $(".msg:last").append(timeStamp);
  }
}

function addMessageToPage(msg, isPersonal = false) {
  const message = $('<div class="msg"></div>').text(msg);
  if (isPersonal) {
    message.addClass("msg-personal");
  } else {
    const figure = $('<figure class="avatar"></figure>');
    const image = $("<img>").attr("src", avatarImage);
    figure.append(image);
    message.addClass("new").prepend(figure);
  }
  $(".mCB_container").append(message);
}
