const get = (name) => {
  let storage = wx.getStorageSync(name)
  let text = ''
  if (storage) {
    text = JSON.parse(storage)
  }
  return text
};
const set = (name, data) => {
  if (name) {
    let text = ''
    if (data) {
      text = JSON.stringify(data)
    }
    wx.setStorageSync(name, text)
  }
};
const remove = (name) => {
  if (name) {
    wx.removeStorageSync(name)
  }
};
const clear = () => {
  wx.clearStorageSync()
};

module.exports = {
  get,
  set,
  remove,
  clear
};