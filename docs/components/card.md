# Card

### 示例

<it-card style="width: 300px" :body-style="{ padding: '0px' }">
  <img
    src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
    class="image"
  />
  <div style="padding: 14px">
    <span>好吃的汉堡</span>
   <div class="bottom">
      <time class="time">"2022-05-03T16:21:26.010Z"</time>
    </div>
  </div>
</it-card>

<style>
p {
  margin: 0;
}
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
margin-top: 13px;
line-height: 12px;
}

.button {
padding: 0;
float: right;
}

.image {
width: 100%;
display: block;
}
</style>

### 代码

```html
<it-card style="width: 300px" :body-style="{ padding: '0px' }">
  <img
    src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
    class="image"
  />
  <div style="padding: 14px">
    <span>好吃的汉堡</span>
    <div class="bottom">
      <time class="time">"2022-05-03T16:21:26.010Z"</time>
    </div>
  </div>
</it-card>
```

### 属性

| 参数       | 说明             | 类型   | 可选值                       | 默认值              |
| ---------- | ---------------- | ------ | ---------------------------- | ------------------- |
| body-style | 设置 body 的样式 | object | —                            | { padding: '20px' } |
| shadow     | 设置阴影显示时机 | string | always <br> hover <br> never | always              |
