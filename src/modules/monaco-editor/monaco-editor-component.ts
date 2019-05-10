import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
    selector: 'monaco-editor-component',
    templateUrl: './monaco-editor-component.html',
    styleUrls: [
        './monaco-editor-component.css'
    ]
})
export class MonacoEditorComponent extends FieldType {

    editorOptions = {theme: 'vs-dark', language: 'javascript'};
    code: string= 'function x() {\nconsole.log("Hello world!");\n}';

    name = [{
        label: '姓名',
        name: '樟树'
    }, {
        label: '姓名',
        name: '樟树1'
    }]

    coder = null

    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.code = this.jsonFormat(this.name)
    }

    ngDoCheck() {
        if (this.code) {
            try { 
                this.coder = eval(this.code)
            } catch (e) { 
                console.log(e)
            } 
        }
    }

    jsonFormat (json) {
        let formatted = '',     //转换后的json字符串
            padIdx = 0,         //换行后是否增减PADDING的标识
            PADDING = '  ';   //4个空格符

            if (typeof json !== 'string') {
                json = JSON.stringify(json);
            }
            /** 
              *利用正则类似将{'name':'ccy','age':18,'info':['address':'wuhan','interest':'playCards']}
             *---> \r\n{\r\n'name':'ccy',\r\n'age':18,\r\n
              *'info':\r\n[\r\n'address':'wuhan',\r\n'interest':'playCards'\r\n]\r\n}\r\n
              */
             json = json.replace(/([\{\}])/g, '\r\n$1\r\n')
                         .replace(/([\[\]])/g, '\r\n$1\r\n')
                         .replace(/(\,)/g, '$1\r\n')
                         .replace(/(\r\n\r\n)/g, '\r\n')
                         .replace(/\r\n\,/g, ',');
            /** 
              * 根据split生成数据进行遍历，一行行判断是否增减PADDING
            */
            (json.split('\r\n')).forEach(function (node, index) {
                 var indent = 0,
                     padding = '';
                 if (node.match(/\{$/) || node.match(/\[$/)) indent = 1;
                 else if (node.match(/\}/) || node.match(/\]/))  padIdx = padIdx !== 0 ? --padIdx : padIdx;
                 else    indent = 0;
             for (var i = 0; i < padIdx; i++)    padding += PADDING;
                 formatted += padding + node + '\r\n';
                 padIdx += indent;
                 console.log('index:'+index+',indent:'+indent+',padIdx:'+padIdx+',node-->'+node);
             });
             return formatted;
         };
}
