(this["webpackJsonptodo-list-application-2"]=this["webpackJsonptodo-list-application-2"]||[]).push([[0],{30:function(e,t,a){e.exports=a(53)},53:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),c=a(22),o=a.n(c),l=a(8),r=a(3),u=a(4),i=a(6),d=a(5),m=a(7),p=a(2),k=a.n(p);var h=function(){return s.a.createElement("h1",null,"Todo Application")},f=a(11);var v=function(e){var t=Object(n.useState)(""),a=Object(f.a)(t,2),c=a[0],o=a[1],l=Object(n.useState)(""),r=Object(f.a)(l,2),u=r[0],i=r[1];return s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-sm-4"},s.a.createElement("input",{type:"text",onChange:function(e){o(e.target.value)},value:c,className:"form-control",placeholder:"Enter task"})),s.a.createElement("div",{className:"col-sm-4"},s.a.createElement("input",{type:"date",className:"form-control",onChange:function(e){i(e.target.value)},value:u})),s.a.createElement("div",{className:"col-sm-4"},s.a.createElement("button",{onClick:function(){e.addNewTask(c,u),o(""),i("")},className:"btn btn-primary"},"Add")))};var b=function(e){return s.a.createElement("h3",null,"Outstanding Tasks: ",s.a.createElement("span",null,e.count))},E=a(23),_=a.n(E),O=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(i.a)(this,Object(d.a)(t).call(this,e))).handleDelete=function(){a.props.deleteTask(a.props.taskId)},a.handleMarkComplete=function(){a.props.markComplete(a.props.taskId,a.state.task_name,a.state.due_date)},a.handleEditTask=function(){a.props.editTask(a.props.taskId)},a.state={task_name:e.task_name,due_date:e.due_date},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-12 col-sm-3"},this.props.editModeOn?s.a.createElement("input",{type:"text",value:this.state.task_name,onChange:function(t){return e.setState({task_name:t.target.value})},className:"form-control"}):s.a.createElement("p",null,this.props.task_name)),s.a.createElement("div",{className:"col-12 col-sm-3"},this.props.editModeOn?s.a.createElement("input",{type:"date",value:this.state.due_date,onChange:function(t){return e.setState({due_date:t.target.value})},className:"form-control"}):s.a.createElement("p",null,_()(this.props.due_date).format("Do MMMM YYYY"))),s.a.createElement("div",{className:"col-12 col-sm-2"},this.props.editModeOn?s.a.createElement("button",{className:"btn btn-outline-secondary",onClick:function(){return e.props.updateTask(e.props.taskId,e.state.task_name,e.state.due_date,e.props.complete)}},"Update"):s.a.createElement("button",{className:"btn btn-outline-primary",onClick:this.handleEditTask},"Edit")),s.a.createElement("div",{className:"col-12 col-sm-2"},this.props.complete?s.a.createElement("button",{className:"btn btn-outline-success",disabled:!0},"Complete"):s.a.createElement("button",{className:"btn btn-outline-success",onClick:this.handleMarkComplete},"Mark Complete")),s.a.createElement("div",{className:"col-12 col-sm-2"},s.a.createElement("button",{className:"btn btn-outline-danger",onClick:this.handleDelete},"Delete")))}}]),t}(n.Component),T=a(24);function g(){var e=Object(T.a)(["\n  font-size: 40px;\n  font-weight: bold;\n  text-align: center\n"]);return g=function(){return e},e}var N=a(25).a.h2(g()),w=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(s)))).state={tasks:[]},a.addNewTask=function(e,t){var n={task_name:e,complete:!1,due_date:t};k.a.post("https://ecq67c0xkb.execute-api.eu-west-1.amazonaws.com/dev/tasks",n).then((function(e){var t=e.data,n=a.state.tasks.slice();n.push(t),a.setState({tasks:n})})).catch((function(e){console.log(e)}))},a.deleteTask=function(e){k.a.delete("https://ecq67c0xkb.execute-api.eu-west-1.amazonaws.com/dev/tasks/".concat(e)).then((function(t){var n=a.state.tasks.filter((function(t){return!(t.taskId===e)}));a.setState({tasks:n})})).catch((function(e){console.log(e)}))},a.markComplete=function(e,t,n){k.a.put("https://ecq67c0xkb.execute-api.eu-west-1.amazonaws.com/dev/tasks/".concat(e),{task_name:t,due_date:n,complete:!0}).then((function(){var t=a.state.tasks.map((function(t){return t.taskId===e?Object(l.a)({},t,{complete:!0}):t}));a.setState({tasks:t})})).catch((function(e){console.log(e)}))},a.editTask=function(e){var t=a.state.tasks.map((function(t){return t.taskId===e?Object(l.a)({},t,{editModeOn:!0}):t}));a.setState({tasks:t})},a.updateTask=function(e,t,n,s){console.log(s),k.a.put("https://ecq67c0xkb.execute-api.eu-west-1.amazonaws.com/dev/tasks/".concat(e),{task_name:t,due_date:n,complete:s}).then((function(){var s=a.state.tasks.map((function(a){return a.taskId===e?Object(l.a)({},a,{task_name:t,due_date:n,editModeOn:!1}):a}));a.setState({tasks:s})})).catch((function(e){console.log(e)}))},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;k.a.get("https://ecq67c0xkb.execute-api.eu-west-1.amazonaws.com/dev/tasks").then((function(t){var a=t.data.tasks;e.setState({tasks:a})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this,t=this.state.tasks.filter((function(e){return!1===e.complete})),a=this.state.tasks.filter((function(e){return!0===e.complete}));return s.a.createElement("div",{className:"container"},s.a.createElement(h,null),s.a.createElement(v,{addNewTask:this.addNewTask}),s.a.createElement(b,{count:t.length}),s.a.createElement(N,null,"Todo"),!t.length&&s.a.createElement("h1",null,"You have no outstanding tasks. Add one above!"),t.map((function(t,a){return s.a.createElement(O,{key:"".concat(t.task_name," ").concat(a),task_name:t.task_name,due_date:t.due_date,complete:t.complete,taskId:t.taskId,editModeOn:t.editModeOn,editTask:e.editTask,updateTask:e.updateTask,deleteTask:e.deleteTask,markComplete:e.markComplete})})),s.a.createElement(N,null,"Done"),!a.length&&s.a.createElement("h1",null,"You do not have any complete tasks. Get to work!"),a.map((function(t,a){return s.a.createElement(O,{key:"".concat(t.task_name," ").concat(a),task_name:t.task_name,due_date:t.due_date,complete:t.complete,taskId:t.taskId,editModeOn:t.editModeOn,editTask:e.editTask,updateTask:e.updateTask,deleteTask:e.deleteTask})})))}}]),t}(n.Component);o.a.render(s.a.createElement(w,null),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.90e756ce.chunk.js.map