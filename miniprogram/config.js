// *** 修改指引 *** //
// 只修改双引号内部的文字，不要修改没有双引号包裹的文字，否则会导致程序出错！
// 不要删除设置项，例如识猫页，删除会导致编译出错！
// 修改时频繁保存、频繁编译，发现改错了立马撤销


module.exports = {
  // 版本号
  app_version: "v1.18.5",
  // 小程序appid
  app_id: "wx900a373be264fb5c",
  // EMAS空间ID
  space_id: "mp-23b0db29-f93e-4aa5-89f2-ff8a655e8485",
  // 服务空间 secret key
  space_secret: require('./appSecret').space_secret,
  // 服务空间地址Api Endpoint
  space_endpoint: "https://api.next.bspapp.com",
  use_private_tencent_cos: true,
  // 私有的腾讯云cos签名过期时间（秒）
  sign_expires_tencent_cos: 3600 * 2,
  // 图片选择数量限制
  chooseMediaCount: 20, 
  // 腾讯云对象存储
  // https://cos.ap-chengdu.myqcloud.com/maopu-1303950078/系统/
  // 科普页图片
  science_imgs: [
    `https://maopu.anka1.top/系统/科普1.png`,
    `https://maopu.anka1.top/系统/科普2.png`,
    `https://maopu.anka1.top/系统/科普3.png`,
    `https://maopu.anka1.top/系统/科普4.png`,
    `https://maopu.anka1.top/系统/科普5.png`
  ],

  // 赞赏码图片
  reward_img: `https://maopu.anka1.top/系统/赞赏码.jpg`,
  // 新猫问卷图片
  feedback_wj_img: `https://maopu.anka1.top/系统/新猫问卷.png`,
  // 小程序菊花码图片
  mpcode_img: `https://maopu.anka1.top/系统/菊花码.jpg`,

  // 徽章排行榜的数量榜logo
  badge_rank_count_img: `https://maopu.anka1.top/系统/badge_rank_count.png`,
  // 徽章排行榜的价值榜logo
  badge_rank_score_img: `https://maopu.anka1.top/系统/badge_rank_score.png`,

  // 猫猫领养状态字符串，对应数据库cat.adopt中的数字下标
  cat_status_adopt: ["未领养", "已领养", "寻找领养中"],
  // 首页漂浮的领养Logo对应的状态
  cat_status_adopt_target: "寻找领养中",

  // 各种文字内容
  text: {
    // 小程序名
    app_name: "砚湖喵影",
    // 首页，pages/genealogy/genealogy
    genealogy: {
      share_tip: "发现身边校园猫咪",
      search_tip: "搜索猫猫名字或昵称",
      filter_tip: "点此进行筛选",
      new_photo_tip: "有新相片！",
      no_photo_tip: "暂无封面照片...",
      photo_by_tip: "Photo by ",
      photo_by_unknow_tip: "匿名猫友",
      photo_loading_tip: "加载照片ing",
      to_star_tip: "返回喵星",
      missing_tip:"已失踪",
      adopt_btn: "只小猫",
    },
    // 关于页，pages/info/info
    info: {
      share_tip: "关于",
      slogan: "拍照记录校园内猫猫的成长轨迹",
    },
    // 猫猫详情页，pages/genealogy/detailCat/detailCat
    detail_cat: {
      bottom_text_loading: "LOADING...",
      bottom_text_end: "- THE END -",
      popularity_tip: "猫猫人气值",
      comment_tip: "猫猫便利贴数",
      button_feedback: "反馈猫猫信息",
      label_nickname: "昵称",
      label_location: "常驻地",
      label_birthday: "生日",
      label_father: "爸爸",
      label_mother: "妈妈",
      label_friend: "好友",
      label_character: "性格及特点",
      label_tutorial: "撸猫指南",
      label_rating: "猫友评分",
      label_tutorial_empty: "暂时还没有",
      label_comment_board: "便利贴墙",
      sterilized_true: "已绝育",
      sterilized_false: "待绝育",
      slogan1: "它们的点点滴滴，由你来记录",
      slogan2: "扫右方小程序码了解更多~",
    },
    // 提交反馈页，pages/genealogy/feedbackDetail/feedbackDetail
    feedback_detail: {
      feedback_title: "反馈",
      feedback_tip: "猫猫信息纠错、照片归属权、功能改进等~",
      input_length_tip: "字数",
      contract_title: "其他信息",
      contract_tip: "（选填）",
      submit_button: "提交反馈",
      submit_tip: "*反馈仅后台工作人员可见",
    },
    // 提交便利贴页，pages/genealogy/commentBoard/commentBoard
    comment_board: {
      ban_tip: "如有误封请在\"关于-信息反馈\"中反馈~",
      auth_tip: "请先设置头像昵称~",
      comment_tip: "给猫咪留张便利贴吧~"
    },
    // 添加照片，pages/genealogy/addPhoto/addPhoto
    add_photo: {
      auth_tip: "设置头像昵称后上传~",
      uploading_tip: "正在上传...",
      success_tip_title: "上传成功！",
      success_tip_content: "审核后就会展示出来啦",
      unfinished_tip_title: "提示",
      unfinished_tip_content: "填写信息后再上传哦！",
    },
    // 赞赏页，pages/info/reward/reward
    reward: {
      share_tip: "投喂罐头",
      ad_success_tip: "多谢喵(ฅ'ω'ฅ)!",
      ad_fail_tip: "没播完喵...",
      reward_tip_title: "投喂罐头",
      reward_tip: "您的投喂及广告收入将用作系统运营和猫猫救助，非常感谢您对流浪猫的帮助与支持！\n喵(^･ｪ･^)",
      reward_count_tip: "* 不定期统计并更新至下方，多谢晒（鞠躬）",
      reward_title: "爱心捐款",
    },
    // 排行页，pages/info/photoRank/photoRank
    photo_rank: {
      share_tip: "拍照月榜",
      auth_tip_title: "请授权查看自己的排名",
      auth_tip: "点击授权",
      count_tip: "* 定期自动更新"
    },
    // 反馈页，pages/info/feedback/feedback
    feedback: {
      share_tip: "信息反馈",
      feedback_tip_title: "留下反馈",
      feedback_tip: "每一条反馈我们都会认真看滴",
      new_cat_tip_title: "新的猫猫",
      new_cat_tip: "提交猫谱中没有的猫猫信息，给猫猫上户口~\n由于微信限制跳转，烦请复制链接到浏览器打开",
      questionnaire_link: "https://umai.anka1.top/q/new-neko-questionnaire",
      contract_tip_title: "更多联系",
      contract_tip: "有关猫猫信息添加、领养咨询、照片维权等事项，请邮件联系：maopu@anka1.top",
      email_address: "maopu@anka1.top",
    },
    // 开发团队页，pages/info/devTeam/devTeam
    dev_team: {
      share_tip: "开发团队",
      team: "程序开发：渔政、蓝卷、XD、zJ、ArcherJo、yw、lauzeyu、xuannfx、LightHouse-1024\n资料维护：Lo\n初期资料整理：hehe、玥琪、大米\n以及各校区猫群的小伙伴~\n非常欢迎新朋友加入设计开发哇~！",
    },
    // 识猫页，pages/recognize/recognize
    recognize: {
      share_tip: "拍照识猫",
      select_tip: "你可以从相册选择猫猫照片\n或点击下方启用相机权限后直接拍照\n",
      select_btn: "启用相机权限",
      reselect_btn: "重新选图",
      no_cat_tip: "照片里好像没有猫猫",
      multi_cat_tip: "点击对应方框可以更改想识别的猫猫",
      no_cat_rec_tip: "看起来，整张照片更像...",
      single_cat_rec_tip: "看起来，这张照片里的猫猫更像...",
      multi_cat_rec_tip: "看起来，黄色框框中的猫猫更像...",
      bottom_tip: "*目前仅拥有十张以上靓照（清晰正面、仅含一只）的猫猫才能被认到哦！多多上传帮忙改进识别效果吧~",
      ad_tip: "识别累了，帮忙点下广告喵（揉眼睛 ( '-ωก̀ )",
    },
    // 科普页，pages/science/science
    science: {
      share_tip: "科普",
    },
    // 精选，pages/leaderboard/leaderboard
    leaderboard: {
      share_tip: "榜单",
    },
    // 特邀用户，pages/inviteUser/inviteUser
    inviteUser: {
      share_tip: "该分享无法激活特邀哦",
      share_title: "[6小时内] 点击成为特邀用户~",
      default_tip: "哦吼，这里空空如也，去首页看看猫猫吧~",
      invite_tip: "猫猫正在检查邀请函...",
      manager_tip: "分享至聊天，普通用户点击后将成为特邀，邀请有效期6小时~",
      expired_title: "出问题",
      success_title: "完成",
      expired_tip: "邀请链接已过期...请联系管理员~",
      already_tip: "你已经是特邀用户啦~",
      success_tip: "已成为特邀用户~",
    },
  }
};

const REMOTE_TEXT_CONFIG_URL = "https://maopu.anka1.top/config_text.json";

function isPlainObject(value) {
  return value && typeof value === 'object' && value.constructor === Object;
}

function mergeDeep(target, source) {
  if (Array.isArray(source)) {
    return source.slice();
  }
  if (!isPlainObject(source)) {
    return source;
  }
  const output = isPlainObject(target) ? { ...target } : {};
  Object.keys(source).forEach((key) => {
    const sourceValue = source[key];
    const targetValue = output[key];
    if (isPlainObject(sourceValue) && isPlainObject(targetValue)) {
      output[key] = mergeDeep(targetValue, sourceValue);
    } else if (isPlainObject(sourceValue)) {
      output[key] = mergeDeep({}, sourceValue);
    } else {
      output[key] = sourceValue;
    }
  });
  return output;
}

function applyRemoteConfig(remoteConfig) {
  if (!isPlainObject(remoteConfig)) {
    return;
  }
  Object.keys(remoteConfig).forEach((key) => {
    if (key === 'text' && isPlainObject(remoteConfig.text)) {
      module.exports.text = mergeDeep(module.exports.text, remoteConfig.text);
    } else {
      const remoteValue = remoteConfig[key];
      const localValue = module.exports[key];
      if (isPlainObject(remoteValue) && isPlainObject(localValue)) {
        module.exports[key] = mergeDeep(localValue, remoteValue);
      } else {
        module.exports[key] = remoteValue;
      }
    }
  });
}

function parseJsonWithComments(text) {
  let inString = false;
  let stringChar = '';
  let inSingleLineComment = false;
  let inMultiLineComment = false;
  let escaped = false;
  let result = '';

  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];
    const nextChar = text[i + 1];

    if (inSingleLineComment) {
      if (char === '\n' || char === '\r') {
        inSingleLineComment = false;
        result += char;
      }
      continue;
    }

    if (inMultiLineComment) {
      if (char === '*' && nextChar === '/') {
        inMultiLineComment = false;
        i += 1;
      }
      continue;
    }

    if (inString) {
      if (escaped) {
        result += char;
        escaped = false;
      } else {
        if (char === '\\') {
          result += char;
          escaped = true;
        } else if (char === stringChar) {
          result += char;
          inString = false;
          stringChar = '';
        } else {
          result += char;
        }
      }
      continue;
    }

    if (char === '/' && nextChar === '/') {
      inSingleLineComment = true;
      i += 1;
      continue;
    }

    if (char === '/' && nextChar === '*') {
      inMultiLineComment = true;
      i += 1;
      continue;
    }

    if (char === '"' || char === "'") {
      inString = true;
      stringChar = char;
      result += char;
      continue;
    }

    result += char;
  }

  return JSON.parse(result);
}

module.exports.loadRemoteTextConfig = function () {
  return new Promise((resolve) => {
    if (typeof wx === 'undefined' || !wx.request) {
      resolve(module.exports);
      return;
    }

    wx.request({
      url: REMOTE_TEXT_CONFIG_URL,
      method: 'GET',
      dataType: 'text',
      timeout: 8000,
      success(res) {
        if (res.statusCode === 200 && typeof res.data === 'string') {
          try {
            const remoteConfig = parseJsonWithComments(res.data);
            if (isPlainObject(remoteConfig)) {
              applyRemoteConfig(remoteConfig);
            } else {
              console.warn('远程文字配置格式不合法，使用本地配置', remoteConfig);
            }
          } catch (err) {
            console.warn('远程文字配置解析失败，使用本地配置', err && err.message ? err.message : err);
          }
        } else {
          console.warn('远程文字配置加载失败，使用本地配置', res.statusCode, res.errMsg || res);
        }
        resolve(module.exports);
      },
      fail(err) {
        console.warn('远程文字配置请求失败，使用本地配置', err && err.errMsg ? err.errMsg : err);
        resolve(module.exports);
      },
      complete() {
        console.log('远程文字配置请求完成');
      },
    });
  });
};