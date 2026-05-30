import { text as text_cfg, feedback_wj_img } from "../../../config";
const share_text = text_cfg.app_name + ' - ' + text_cfg.feedback.share_tip;
import { signCosUrl } from "../../../utils/common";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    text_cfg: text_cfg,
  },

  toMyFeedback() {
    wx.navigateTo({
      url: '/pages/info/feedback/myFeedback/myFeedback'
    });
  },

  toFeedback() {
    wx.navigateTo({
      url: '/pages/genealogy/feedbackDetail/feedbackDetail',
    })
  },

  async toNewCat() {
    const src = await signCosUrl(feedback_wj_img);
    wx.previewImage({
      urls: [src],
      success: (res) => {
        console.log(res);
      },
      fail: (res) => {
        console.log(res);
      },
      complete: (res) => {
        console.log(res);
      },
    });
  },

  copyText(textVale, title, content) {
    // 复制链接到剪贴板
    wx.setClipboardData({
      data: textVale,
      success: () => {
        wx.showModal({
          title: title,
          content: content,
          showCancel: false
        })
      },
      fail: () => {
        wx.showToast({ title: '操作失败', icon: 'none' })
      }
    })
  },

  copyQuestionnaireLink() {
    this.copyText(text_cfg.feedback.questionnaire_link, "链接已复制", "请打开浏览器粘贴访问")
  },

  copyEmailAddress() {
    this.copyText(text_cfg.feedback.email_address, "邮件地址已复制", "期待您的来信")
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      title: share_text
    }
  }
})