import { segment } from "oicq";//导包部分
import fetch from "node-fetch";

const _path = process.cwd();

export class example extends plugin{
    constructor () {
            super({
                name:'丁真',
                dsc:'坤坤',
                event:'message',
                priority: 4444,
                rule:[
                    {
             /** 命令正则匹配 */
            reg: '^((.*)鸡你太美(.*)|(.*)坤坤(.*)|(.*)小黑子(.*)|(.*)鲲鲲(.*)|(.*)鸽鸽(.*))$',
            /** 执行方法 */
            fnc: 'xy'
                    }
                ]
            })
    }
    async xy (e){
        let msg = [
            segment.at(e.user.id),
            "欢迎使用xy插件",
            segment.image('file:///${_path}/resources/01.png')
        ]
        e.reply(msg);
        return true;
    }
}
