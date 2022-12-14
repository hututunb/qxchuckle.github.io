new MiniSandbox({el:"#list-example",files:{"1.html":{title:"例1",defaultValue:"<dl>\n    <dt>第一条</dt>\n    <dd>你若是觉得你有实力和我玩，良辰不介意奉陪到底</dd>\n    <dd>我会让你明白，我从不说空话</dd>\n    <dd>我是本地的，我有一百种方式让你呆不下去；而你，无可奈何</dd>\n        \n    <dt>第二条</dt>\n    <dd>良辰最喜欢对那些自认能力出众的人出手</dd>\n    <dd>你可以继续我行我素，不过，你的日子不会很舒心</dd>\n    <dd>你只要记住，我叫叶良辰</dd>\n    <dd>不介意陪你玩玩</dd>\n    <dd>良辰必有重谢</dd>\n</dl>\n            "},"2.html":{title:"例2",defaultValue:"<dl>\n    <dt>北京</dt>\n    <dd>国家首都，政治文化中心</dd>\n    <dd>污染很严重，PM2.0天天报表</dd>\n    <dt>上海</dt>\n    <dd>魔都，有外滩、东方明珠塔、黄浦江</dd>\n    <dt>广州</dt>\n    <dd>中国南大门，有珠江、小蛮腰</dd>\n</dl>\n        "},"3.html":{title:"例2",defaultValue:"<dl>\n    <dt>北京</dt>\n    <dd>国家首都，政治文化中心</dd>\n    <dd>污染很严重，PM2.0天天报表</dd>\n</dl>\n<dl>\n    <dt>上海</dt>\n    <dd>魔都，有外滩、东方明珠塔、黄浦江</dd>\n</dl>\n<dl>\n    <dt>广州</dt>\n    <dd>中国南大门，有珠江、小蛮腰</dd>\n</dl>\n        "}},defaultConfig:{height:"400px",autoRun:!0,autoRunInterval:1e3,editorRange:"55%",draggable:!0,direction:"row"}}),new MiniSandbox({el:"#table1-example",files:{"3.html":{title:"横向",defaultValue:'<table border="1">\n    <tr>\n        <td>张三</td>\n        <td>18</td>\n        <td>男</td>\n        <td>广东</td>\n    </tr>\n    <tr>\n        <td>小明</td>\n        <td>19</td>\n        <td colspan="2" align="right">广东</td>\n    </tr>\n</table>\n'},"4.html":{title:"纵向",defaultValue:'<table border="1">\n    <tr>\n        <td>张三</td>\n        <td>18</td>\n        <td>男</td>\n        <td rowspan="2">广东</td>\n    </tr>\n    <tr>\n        <td>小明</td>\n        <td>19</td>\n        <td>男</td>\n    </tr>\n</table>\n        '}},defaultConfig:{height:"320px",autoRun:!0,autoRunInterval:1e3,editorRange:"55%",draggable:!0,direction:"row"}}),new MiniSandbox({el:"#table2-example",files:{"5.html":{title:"HTML",defaultValue:'<table border="1">\n    <tbody>\n        <tr>\n            <td>二</td>\n            <td>22</td>\n            <td>男</td>\n            <td>广州</td>\n        </tr>\n    </tbody>\n    <tfoot>\n        <tr>\n            <td>四</td>\n            <td>21</td>\n            <td>男</td>\n            <td>东莞</td>\n        </tr>\n    </tfoot>\n    <tr>\n        <td>三</td>\n        <td>21</td>\n        <td>男</td>\n        <td>广州</td>\n    </tr>\n    <thead>\n        <tr>\n            <td>一</td>\n            <td>23</td>\n            <td>女</td>\n            <td>深圳</td>\n        </tr>\n    </thead>\n</table>\n'}},defaultConfig:{height:"400px",autoRun:!0,autoRunInterval:1e3,editorRange:"55%",draggable:!0,direction:"row"}}),new MiniSandbox({el:"#iframe-example",files:{"5.html":{title:"HTML",defaultValue:'<a href="" target="myframe">默认显示空白页面</a><br>\n<a href="../about" target="myframe">关于页面</a><br>\n<iframe src="" width="100%" height="225" name="myframe"></iframe>'}},defaultConfig:{height:"400px",autoRun:!0,autoRunInterval:1e3,editorRange:"20%",draggable:!0,direction:"column-reverse"}}),new MiniSandbox({el:"#input1-example",files:{"5.html":{title:"HTML",defaultValue:'<form action="" method="post" onreset="return myReset()">\n    <label>用户名:</label>\n    <input class="inputCss" type="text" name="userName" value="chuckle" readonly><br>\n    <label>密码:</label>\n    <input class="inputCss" type="password" name="password" placeholder="请输入密码"><br>\n    <label>性别:</label>\n    <input type="radio" name="sex" value="男" >男\n    <input type="radio" name="sex" value="女" checked>女<br>\n    <label>爱好:</label>\n    <input type="checkbox" name="hobby" value="唱" checked>唱\n    <input type="checkbox" name="hobby" value="跳" >跳\n    <input type="checkbox" name="hobby" value="rap" checked>rap\n    <input type="checkbox" name="hobby" value="篮球" >篮球<br>\n    <label>生日:</label>\n    <input type="datetime-local" class="inputCss"><br>\n    <label>头像:</label>\n    <input type="file" class="inputCss"><br>\n    <input type="submit" value="登录">\n    <input type="reset" value="重置">\n</form>\n'}},defaultConfig:{height:"400px",autoRun:!0,autoRunInterval:1e3,editorRange:"55%",draggable:!0,direction:"column-reverse"}}),new MiniSandbox({el:"#select1-example",files:{"5.html":{title:"HTML",defaultValue:'<form>\n    <select>\n        <option>小学</option>\n        <option>初中</option>\n        <option>高中</option>\n        <option>大学</option>\n        <option selected="">研究生</option>\n    </select>\n    <select size="3">\n        <option>小学</option>\n        <option>初中</option>\n        <option>高中</option>\n        <option>大学</option>\n        <option>研究生</option>\n    </select>\n    <select multiple="">\n        <option>小学</option>\n        <option>初中</option>\n        <option selected="">高中</option>\n        <option selected="">大学</option>\n        <option>研究生</option>\n    </select>\n</form>\n'}},defaultConfig:{height:"300px",autoRun:!0,autoRunInterval:1e3,editorRange:"55%",draggable:!0,direction:"row"}}),new MiniSandbox({el:"#textarea1-example",files:{"5.html":{title:"HTML",defaultValue:'<form>\n    <textarea rows="4" cols="20">112233445566</textarea>\n    <textarea rows="4" cols="10">   99999   </textarea>\n    <textarea readonly rows="4" cols="15">   99999   </textarea>\n</form>'}},defaultConfig:{height:"250px",autoRun:!0,autoRunInterval:1e3,editorRange:"55%",draggable:!0,direction:"column-reverse"}}),new MiniSandbox({el:"#fieldset1-example",files:{"5.html":{title:"HTML",defaultValue:'<form id="form1">\n    <fieldset>\n        <legend>账号信息</legend>\n        姓名：<input value="张三" ><br>\n        密码：<input type="password" value="pwd" size="30"><br>\n    </fieldset>\n</form>\n<fieldset form="form1">\n    <legend>其他信息</legend>\n    性别：<input type="radio" name="gender" value="male" checked="">男\n        <input type="radio" name="gender" value="female" >女<br>\n    爱好：<input type="checkbox" name="love" value="eat">吃饭\n        <input type="checkbox" name="love" value="sleep">睡觉\n        <input type="checkbox" name="love" value="bat">打豆豆\n</fieldset>\n'}},defaultConfig:{height:"480px",autoRun:!0,autoRunInterval:1e3,editorRange:"55%",draggable:!0,direction:"column-reverse"}}),new MiniSandbox({el:"#label1-example",files:{"5.html":{title:"HTML",defaultValue:'<input type="radio" name="sex" id="nan" /> <label for="nan">男</label>\n<input type="radio" name="sex" id="nv"  /> <label for="nv">女</label>\n<input type="checkbox" id="none" /><label for="none">隐藏性别</label>'}},defaultConfig:{height:"180px",autoRun:!0,autoRunInterval:1e3,editorRange:"60%",draggable:!0,direction:"column-reverse"}}),new MiniSandbox({el:"#h5-input-example",files:{"5.html":{title:"HTML",defaultValue:'<form action="">\n    <fieldset>\n        <legend>表单类型</legend>\n        email: <input type="email" name="email" required>\n        color: <input type="color" name="color">\n        url: <input type="url" name=\'url\'>\n        number: <input type="number" step="3" name="number">\n        range: <input type="range" name="range" value="100">\n        search: <input type="search" name="search">\n        tel: <input type="tel" name="tel">\n        time: <input type="time" name="time">\n        date: <input type="date" name="date">\n        datetime: <input type="datetime">\n        week: <input type="week" name="week">\n        month: <input type="month" name="month">\n        datetime-local: <input type="datetime-local" name="datetime-local">\n        <input type="submit">\n    </fieldset>\n</form>\n'}},defaultConfig:{height:"500px",autoRun:!0,autoRunInterval:1e3,editorRange:"63%",draggable:!0,direction:"column-reverse"}}),new MiniSandbox({el:"#datalist-example",files:{"5.html":{title:"HTML",defaultValue:'<input type="text" list="myData">\n<datalist id="myData">\n    <option>本科</option>\n    <option>研究生</option>\n    <option>不明</option>\n</datalist>'}},defaultConfig:{height:"220px",autoRun:!0,autoRunInterval:1e3,editorRange:"70%",draggable:!0,direction:"column-reverse"}}),new MiniSandbox({el:"#new-form-example",files:{"5.html":{title:"HTML",defaultValue:'<form action="" autocomplete="on">\n    <fieldset>\n        <legend>表单属性</legend>\n        用户名：<input type="text" placeholder="例如：chuckle" name="userName" required/>\n        电话：<input type="tel" pattern="1\\d{10}"/>\n        <input type="file" multiple>\n        <input type="file" name="file" multiple/>\n        <input type="submit"/>\n    </fieldset>\n</form>'}},defaultConfig:{height:"380px",autoRun:!0,autoRunInterval:1e3,editorRange:"65%",draggable:!0,direction:"column-reverse"}}),new MiniSandbox({el:"#audio-example",files:{"5.html":{title:"HTML",defaultValue:'<audio src="../music/songs/3.mp3" controls loop></audio>'}},defaultConfig:{height:"180px",autoRun:!0,autoRunInterval:1e3,editorRange:"40%",draggable:!0,direction:"column-reverse"}});