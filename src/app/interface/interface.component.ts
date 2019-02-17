import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interface',
  templateUrl: './interface.component.html',
  styleUrls: ['./interface.component.css']
})
export class InterfaceComponent implements OnInit {
  accessType: any;
  destinationIP;
  sourceIP;
  protocol;
  AddBtn: boolean;
  mainArray = [];
  numberr: number;
  numberrShow: boolean;
  srNo: number;
  filteredItems = [];
  // SourceIPP: any;
  protocolll: any;
  filterShow: boolean;
  currentlen: number = 0;
  arr = [];
  nextt: boolean;
  pre: boolean;
  constructor() { }

  ngOnInit() {
    this.currentlen = 0
    // this.assignCopy();
  }

  isValidIpv4Addr(type) {
    if (type == 's') {
      console.log("this.sourceIP", this.sourceIP, type)
      return /^(?=\d+\.\d+\.\d+\.\d+$)(?:(?:25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\.?){4}$/.test(this.sourceIP);
    } else {
      console.log("this.destinationIP", this.destinationIP)
      return /^(?=\d+\.\d+\.\d+\.\d+$)(?:(?:25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\.?){4}$/.test(this.destinationIP);
    }
  }

  ValidateIPaddress(type) {

    this.isValidIpv4Addr(type)
    // console.log(this.sourceIP)
    // document.getElementById('ipv4tests').innerHTML += '<li>' + this.sourceIP + ' ' + (this.isValidIpv4Addr(type) ? '<font color="green">VALID!</font>' : '<font color="red">INVALID!</font>') + '</li>';

    if (this.isValidIpv4Addr('s') == true && this.protocol && this.accessType) {
      this.AddBtn = true
      console.log(this.AddBtn)
    } else {
      this.AddBtn = false
      console.log(this.AddBtn)
    }

    if (this.isValidIpv4Addr('d') == true && this.protocol && this.accessType) {
      this.AddBtn = true
      console.log(this.AddBtn)
    } else {
      this.AddBtn = false
      console.log(this.AddBtn)
    }
  }

  accessTypee() {
    this.isValidIpv4Addr('s')
    this.isValidIpv4Addr("d")

    if (this.isValidIpv4Addr('s') == true && this.protocol && this.accessType) {
      this.AddBtn = true
      console.log(this.AddBtn)
    } else {
      this.AddBtn = false
      console.log(this.AddBtn)
    }

    if (this.isValidIpv4Addr('d') == true && this.protocol && this.accessType) {
      this.AddBtn = true
      console.log(this.AddBtn)
    } else {
      this.AddBtn = false
      console.log(this.AddBtn)
    }
  }

  protocoll() {
    this.isValidIpv4Addr('s')
    this.isValidIpv4Addr("d")

    if (this.isValidIpv4Addr('s') == true && this.protocol && this.accessType) {
      this.AddBtn = true
      console.log(this.AddBtn)
    } else {
      this.AddBtn = false
      console.log(this.AddBtn)
    }

    if (this.isValidIpv4Addr('d') == true && this.protocol && this.accessType) {
      this.AddBtn = true
      console.log(this.AddBtn)
    } else {
      this.AddBtn = false
      console.log(this.AddBtn)
    }
  }

  SaveNAdd() {
    this.nextt = false
    this.filterShow = false
    this.assignCopy();//when you fetch collection from server.
    let obj = {
      "srNo": 0,
      "protocol": "",
      "sourceIP": "",
      "destinationIP": "",
      "accessType": "",
      // "action" : "",
    }

    obj.protocol = this.protocol
    obj.sourceIP = this.sourceIP
    obj.destinationIP = this.destinationIP
    obj.accessType = this.accessType
    obj.srNo = (this.mainArray.length - 1) + 1
    this.mainArray.unshift(obj);
    this.AddBtn = false

    this.accessType = ''
    this.destinationIP = ''
    this.sourceIP = ''
    this.protocol = ''

    console.log(JSON.stringify(this.mainArray))
    let num = 1

    for (let i in this.mainArray) {
      // this.srNo = (this.mainArray.length - 1) + 1
      this.numberrShow = true
      num++
    }
    this.numberr = num
  }

  deleteInput(i) {
    this.mainArray.splice(i, 1);
    let n = 0
    for (let i in this.mainArray) {
      // console.log(JSON.stringify(this.mainArray[i]))
      this.mainArray[i].srNo = (this.mainArray.length - 1) - n
      n++
    }
    this.numberr = this.mainArray[0].srNo + 2
    console.log(JSON.stringify(this.mainArray))

  }


  assignCopy() {
    this.filteredItems = Object.assign([], this.mainArray);
  }
  filterItem() {
    this.nextt = false
    if (!this.protocolll) {
      this.assignCopy();
    } // when nothing has typed
    this.filteredItems = Object.assign([], this.mainArray).filter(
      item => item.protocol.toLowerCase().indexOf(this.protocolll.toLowerCase()) > -1
    )
    this.filterShow = true
  }

  next() {
    this.filterShow = false 
    this.pre = true;
    this.arr = []
    this.nextt = true

    this.currentlen = this.currentlen + 2;
    console.log("qqq", JSON.stringify(this.currentlen))
    var qqq
    for (var i = this.currentlen; i < this.mainArray.length; i++) {
      if (i >= this.currentlen + 2) {
        break;
      }else{
        this.arr.unshift(this.mainArray[i])
      }

    }
    console.log("this.mainArray", JSON.stringify(this.arr))
  }

  prev() {
    this.filterShow = false 
    this.arr = []
    this.nextt = true

    if (this.currentlen == 0) {
      this.pre = false;
    }
    
    this.currentlen = this.currentlen - 2;
    console.log("qqq", JSON.stringify(this.currentlen))
    var qqq
    for (var i = this.currentlen; i < this.mainArray.length; i++) {
      if (i >= this.currentlen + 2) {
        break;
      }else{
        this.arr.unshift(this.mainArray[i])
      }

    }
    console.log("this.mainArray", JSON.stringify(this.arr))
  }

}
