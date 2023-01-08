import { segment } from "oicq";//导包部分

export class example extends plugin{
        constructor(){
            super({
                name:'天选之子',
                dsc:'天选之子',
                event:'message',
                priority: 4446,
                rule:[
                    {
             /** 命令正则匹配 */
            reg: '^((.*)天选之子(.*))$',
            /** 执行方法 */
            fnc: 'txzz'
                    }
                ]

            })

        }

        async txzz(e){
            
              
      //获取群员列表
      let mmap = await e.group.getMemberMap();
      //转换数组
      let arrMember = Array.from(mmap.values());
      //随机获得一个群员对象
      let randomWife = arrMember[Math.round(Math.random() * (arrMember.length - 1))];
       let qq = randomWife.user_id;

       e.group.muteMember(qq,30);
       let msg=[
        segment.at(e.user_id),
        '天选之人是来了',
        segment.at(qq)
       ]
       e.reply(msg);

       return true;
        }

}