import { Component, ViewChild } from '@angular/core';
import { MdSidenav } from '@angular/material';

 @Component({
 	selector : 'app-menu',
 	styleUrls : ['./rasm-menu.css'],
 	templateUrl : "./rasm-menu.html", 
 })

export class menu {
    @ViewChild('right') sidenav: MdSidenav;
 

    navArray =[{
        name : "Home",
        icon : "home",
        clickCls : true
        
    },{
        name : "Profile",
        icon : "account_circle",
        clickCls : false
    },{
        name : "Email",
        icon : "email",
        clickCls : false
    },{
        name : "Charts",
        icon : "show_chart",
        clickCls : false
    },{
        name : "Chat",
        icon : "chat_bubble",
        clickCls : false
    },{
        name : "Dashboard",
        icon : "dashboard",
        clickCls : false
    },{
        name : "Profile",
        icon : "account_circle",
        clickCls : false
    },{
        name : "Email",
        icon : "email",
        clickCls : false
    },{
        name : "Charts",
        icon : "show_chart",
        clickCls : false
    } ] 

    sideNavToggle() {
        this.sidenav.toggle();
            console.log("Sidenav opened");
    }
    sideNavClose() {
        this.sidenav.close(); 
    }

    changeColor(obj){ 
        for(var i=0; i<=this.navArray.length -1; i++){
            this.navArray[i].clickCls = false
        }
        obj.clickCls = true;
    }
 }
