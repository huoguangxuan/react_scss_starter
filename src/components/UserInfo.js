import cookie from "react-cookies";
export const Token = {
    set:function(t){
        let date =new Date();
        date.setDate(date.getDate()+1);
        cookie.save('global-assessment-token',t,{path:'/',expires:date});
    },
    get:function(){
        return cookie.load("global-assessment-token");
    },
    remove:function(){
        cookie.remove("global-assessment-token",{path:'/'})
    }
}

export const User={
    set:function(u){
        let date = new Date();
        date.setDate(date.getDate() + 7);
        cookie.save('global-assessment-user', u, { path: '/', expires: date });
    },
    get: function () {
        return cookie.load("global-assessment-user");
    },
    remove: function () {
        return cookie.load("global-assessment-user",{path:'/'});
    }
}