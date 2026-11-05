/* =====================================================================
   KHÁM PHÁ ĐỘNG VẬT — activity content
   Edit with the teacher editor (admin/) or by hand. See EDITING.md.
   ===================================================================== */
const ST=[];
const STAGES=ST;

ST.push({
 id:1,
 pages:[46,47],
 title:"Bí mật trong lưng của em",
 en:"What is a vertebrate?",
 role:"Chuyên gia Xương sống · Backbone Expert",
 img:"anat_05",
 mission:"Phân biệt động vật và thực vật, tìm xương sống trên cơ thể và gọi đúng tên các đốt xương nhỏ.",
 vocab:[{en:"animal",vi:"động vật",img:"anat_00"},{en:"plant",vi:"thực vật",img:"anat_01"},{en:"head",vi:"đầu",img:"id_03"},{en:"back",vi:"lưng",img:"anat_08"},{en:"spine",vi:"xương sống",img:"anat_05"},{en:"vertebrae",vi:"các đốt sống",img:"anat_04"},{en:"backbone",vi:"xương sống",img:"anat_03"},{en:"bone",vi:"xương",img:"anat_09"}],
 reward:["anat_00","g_01","anat_08"],
 can:[["I can point to a back.","Em chỉ được cái lưng."],["I can say spine.","Em nói được \"spine\"."],["A vertebrate has a backbone.","Động vật có xương sống thì có xương sống."]],
 helper:[["tr.46 câu 1","Tick ✓ vào Animal hoặc Plant ở mỗi hàng."],["tr.47 câu 2a–d","Tìm xương ở lưng, khoanh vòng đầu, khoanh \"spine\", viết \"vertebrae\"."],["tr.47 câu 3","Kẻ đường tới xương sống và viết \"backbone\"."]],
 tasks:[
  {type:"table",cmd:"tick",pg:46,ref:"Câu 1",q:"Put one tick (✓) in each row of the table to show if the living thing is an animal or a plant.",vi:"Mỗi hàng đánh MỘT dấu ✓ để cho biết sinh vật đó là động vật hay thực vật.",kw:[["living thing","sinh vật"],["animal","động vật"],["plant","thực vật"]],hint:"Động vật di chuyển và ăn thức ăn. Thực vật là cây cối.",corner:"Living thing",cols:[{id:"a",t:"Animal?"},{id:"p",t:"Plant?"}],rows:[{id:"1",img:"g_13",ans:"a"},{id:"2",img:"anat_13",ans:"p"},{id:"3",img:"anat_11",ans:"a"},{id:"4",img:"anat_12",ans:"a"},{id:"5",img:"anat_01",ans:"p"}],write:"cừu = Animal, cây cam = Plant, ngỗng = Animal, thỏ = Animal, cây lô hội = Plant"},
  {type:"choice",cmd:["find","circle"],pg:47,ref:"Câu 2a",q:"Where in your body can you find bones like this?",vi:"Em có thể tìm thấy những xương như thế này ở đâu trên cơ thể?",fig:"anat_05",hint:"Đây là một dãy xương dài chạy dọc phía sau cơ thể.",opts:[{id:"back",t:"back",vi:"lưng"},{id:"head",t:"head",vi:"đầu"},{id:"hand",t:"hand",vi:"bàn tay"},{id:"foot",t:"foot",vi:"bàn chân"}],ans:"back",write:"back (in my back)"},
  {type:"hotspot",cmd:"circle",pg:47,ref:"Câu 2b",q:"Draw a circle on the diagram to show where your head is.",vi:"Vẽ một vòng tròn lên hình để chỉ chỗ đầu của em nằm ở đâu.",hint:"Xương sống nối với đầu ở phía TRÊN CÙNG.",img:"anat_05",targets:[{x:20,y:0,w:70,h:22}],wrongMsg:"Đầu nằm ở đầu trên cùng của xương sống. Chạm lại nhé!",bookNote:"Trong sách: vẽ vòng tròn ở đầu trên cùng của xương sống."},
  {type:"choice",cmd:"circle",pg:47,ref:"Câu 2c",q:"What is another name for this long group of bones? Circle your answer.",vi:"Tên gọi khác của dãy xương dài này là gì? Khoanh đáp án.",kw:[["spine","xương sống"]],fig:"anat_05",opts:[{id:"spike",t:"spike"},{id:"spine",t:"spine"},{id:"spade",t:"spade"},{id:"spindle",t:"spindle"}],ans:"spine",hint:"Từ bắt đầu bằng \"sp\" và có nghĩa là xương sống."},
  {type:"spell",cmd:"write",pg:47,ref:"Câu 2d",q:"What are the small bones in the picture called?",vi:"Những xương nhỏ trong hình được gọi là gì?",img:"anat_05",word:"vertebrae",extra:"so",hint:"Bắt đầu bằng \"v\": v-e-r-t-e-b-r-a-e. Bấm \"Nghe từ\" để nghe."},
  {type:"spell",cmd:["label","write"],pg:47,ref:"Câu 3",q:"This animal is a vertebrate. Draw a line and write a word to label the part that shows it is a vertebrate.",vi:"Con vật này là động vật có xương sống. Kẻ một đường và viết từ ghi tên bộ phận cho thấy điều đó.",kw:[["vertebrate","động vật có xương sống"]],img:"anat_06",word:"backbone",extra:"xz",hint:"Mũi tên chỉ vào dãy xương chạy dọc lưng: \"back\" + \"bone\".",explain:"Trong sách là xương cá sấu, em kẻ đường tới xương sống và viết từ này."}
 ]});

ST.push({
 id:2,
 pages:[48,49],
 title:"Năm chiếc hộp màu",
 en:"Vertebrate groups",
 role:"Chuyên gia 5 nhóm · 5 Groups Expert",
 img:"tex_00",
 mission:"Biết 5 nhóm động vật có xương sống và nối mỗi con vật với lớp da, lông hoặc vây của nó.",
 vocab:[{en:"mammal",vi:"động vật có vú",img:"g_06"},{en:"bird",vi:"chim",img:"tex_01"},{en:"fish",vi:"cá",img:"tex_02"},{en:"reptile",vi:"bò sát",img:"g_27"},{en:"amphibian",vi:"lưỡng cư",img:"tex_04"},{en:"fur",vi:"lông mao",img:"tex_07"},{en:"feathers",vi:"lông vũ",img:"tex_08"},{en:"scales",vi:"vảy",img:"tex_09"}],
 reward:["tex_00","tex_04","g_06"],
 can:[["I can name 5 groups.","Em gọi tên được 5 nhóm."],["I can match fur, feathers, fins.","Em nối được lông, lông vũ, vây."],["I can say mammal, bird, fish.","Em nói được mammal, bird, fish."]],
 helper:[["tr.48 câu 1","Nối mỗi con vật với đặc điểm cơ thể."],["tr.49 câu 2","Kẻ đường tới xương sống, viết \"vertebrates\"."],["tr.49 câu 3","Viết tên nhóm dưới mỗi hình."]],
 tasks:[
  {type:"match",cmd:"match",pg:48,ref:"Câu 1",q:"Draw lines to match each animal with a feature of the animal.",vi:"Nối mỗi con vật với một đặc điểm của nó.",hint:"Thỏ có lông mao, cá có vây để bơi, gà có lông vũ, rắn có da khô có vảy, ếch có da mỏng ẩm.",say:true,left:[{id:"r",img:"anat_12"},{id:"f",img:"tex_02"},{id:"h",img:"id_10"},{id:"s",img:"id_09"},{id:"g",img:"tex_04"}],right:[{id:"fur",t:"fur"},{id:"fins",t:"fins to swim"},{id:"fea",t:"feathers"},{id:"sc",t:"dry, scaly skin"},{id:"sk",t:"thin, moist skin"}],pairs:{r:"fur",f:"fins",h:"fea",s:"sc",g:"sk"}},
  {type:"label",cmd:["label","write"],pg:49,ref:"Câu 2a",q:"This animal has a backbone. Draw a label line and write a word to show its backbone.",vi:"Con vật này có xương sống. Kẻ đường ghi nhãn và viết từ để chỉ xương sống của nó.",kw:[["backbone","xương sống"]],hint:"Xương sống chạy dọc lưng. Kéo hoặc chạm chữ rồi chạm vào số trên hình.",img:"tex_03",pins:[{x:60,y:44,ans:"backbone",dir:"r"},{x:30,y:20,ans:"head",dir:"r"},{x:75,y:88,ans:"tail",dir:"l"}],bank:["backbone","head","tail","wing"]},
  {type:"spell",cmd:"write",pg:49,ref:"Câu 2b",q:"What are all animals with backbones called?",vi:"Tất cả các động vật có xương sống được gọi là gì?",word:"vertebrates",extra:"io",hint:"Vertebrate (số ít) + s. Bấm \"Nghe từ\"."},
  {type:"cloze",cmd:["name","write"],pg:49,ref:"Câu 3",q:"Sully and Victor are in different animal groups. Write the name of their group under each picture.",vi:"Sully và Victor thuộc các nhóm động vật khác nhau. Viết tên nhóm của chúng dưới mỗi hình.",hint:"Con chim thuộc nhóm bird. Con rùa có mai và vảy khô thuộc nhóm reptile.",tpl:"<div class=\"pair\">{img:id_11}{a}</div><div class=\"pair\">{img:g_27}{b}</div>",slots:{a:{ans:["bird"]},b:{ans:["reptile"]}},bank:["mammal","bird","fish","reptile","amphibian"]},
  {type:"place",cmd:"sort",pg:48,ref:"Mini game",q:"Sort the clues into the correct group box.",vi:"Phân loại mỗi manh mối vào hộp nhóm đúng.",hint:"Lông mao → mammal; lông vũ → bird; vây → fish; da khô có vảy → reptile; da mỏng ẩm → amphibian.",write:"",slots:[{id:"m",t:"mammal",vi:"có vú"},{id:"b",t:"bird",vi:"chim"},{id:"f",t:"fish",vi:"cá"},{id:"r",t:"reptile",vi:"bò sát"},{id:"a",t:"amphibian",vi:"lưỡng cư"}],cards:[{id:"fur",img:"tex_07",t:"fur"},{id:"fea",img:"tex_08",t:"feathers"},{id:"fin",img:"tex_09",t:"fins to swim"},{id:"sc",img:"tex_12",t:"dry, scaly skin"},{id:"sk",img:"tex_13",t:"thin, moist skin"}],map:{fur:"m",fea:"b",fin:"f",sc:"r",sk:"a"}}
 ]});

ST.push({
 id:3,
 pages:[50,51],
 title:"Cánh cổng Có – Không",
 en:"What is a key?",
 role:"Chuyên gia Yes/No · Key Detective",
 img:"id_00",
 mission:"Dùng khóa phân loại: trả lời Có/Không từng câu hỏi để tìm ra chữ cái của mỗi con vật.",
 vocab:[{en:"key",vi:"khóa phân loại",img:"id_00"},{en:"yes",vi:"có",img:"id_01"},{en:"no",vi:"không",img:"id_02"},{en:"ask",vi:"hỏi",img:"id_03"},{en:"four legs",vi:"bốn chân",img:"id_07"},{en:"stripes",vi:"vằn",img:"id_06"},{en:"feathers",vi:"lông vũ",img:"tex_08"},{en:"fins",vi:"vây",img:"tex_02"}],
 reward:["id_07","id_11","id_12"],
 can:[["I can ask yes/no.","Em hỏi được Có/Không."],["I can follow a key.","Em đi theo được khóa phân loại."],["I can find zebra, cat, chicken, snake.","Em tìm được ngựa vằn, mèo, gà, rắn."]],
 helper:[["tr.50 câu 1","Dùng khóa, viết A, B, C hoặc D dưới mỗi con vật."],["tr.51 câu 2","Dùng khóa, viết P, Q, R hoặc S dưới mỗi con vật."]],
 tasks:[
  {type:"keywalk",cmd:"key",pg:50,ref:"Câu 1",q:"Use the key to write letter A, B, C or D under each animal picture.",vi:"Dùng khóa phân loại để viết chữ A, B, C hoặc D dưới mỗi hình con vật.",kw:[["key","khóa phân loại"],["legs","chân"],["stripes","vằn"],["feathers","lông vũ"]],hint:"Bắt đầu ở ô trên cùng. Trả lời Có/Không, đi theo nhánh cho tới khi gặp một chữ cái.",tree:{id:"a1",q:"4 legs?",vi:"Có 4 chân?",yes:{id:"a2",q:"Stripes?",vi:"Có vằn?",yes:"A",no:"B"},no:{id:"a3",q:"Feathers?",vi:"Có lông vũ?",yes:"C",no:"D"}},items:[{img:"id_07",name:"ngựa vằn",letter:"A",ans:{a1:true,a2:true}},{img:"id_08",name:"con mèo",letter:"B",ans:{a1:true,a2:false}},{img:"id_09",name:"con rắn",letter:"D",ans:{a1:false,a3:false}},{img:"id_10",name:"con gà",letter:"C",ans:{a1:false,a3:true},why:{a1:"Gà chỉ có 2 chân, không phải 4 chân."}}]},
  {type:"keywalk",cmd:"key",pg:51,ref:"Câu 2",q:"Use the key to write letter P, Q, R or S under each animal picture.",vi:"Dùng khóa phân loại để viết chữ P, Q, R hoặc S dưới mỗi hình con vật.",kw:[["legs","chân"],["feathers","lông vũ"],["fins","vây"]],hint:"Cá và rắn không có chân. Vẹt có lông vũ. Rùa có chân nhưng không có lông vũ.",tree:{id:"b1",q:"Legs?",vi:"Có chân?",yes:{id:"b2",q:"Feathers?",vi:"Có lông vũ?",yes:"P",no:"Q"},no:{id:"b3",q:"Swims with fins?",vi:"Bơi bằng vây?",yes:"R",no:"S"}},items:[{img:"tex_02",name:"con cá vàng",letter:"R",ans:{b1:false,b3:true}},{img:"g_27",name:"con rùa",letter:"Q",ans:{b1:true,b2:false}},{img:"id_11",name:"con vẹt",letter:"P",ans:{b1:true,b2:true}},{img:"tex_05",name:"con rắn",letter:"S",ans:{b1:false,b3:false}}]},
  {type:"choice",cmd:"suggest",pg:51,ref:"Thám tử What am I?",q:"I have feathers and two legs. Who am I?",vi:"Tôi có lông vũ và hai chân. Tôi là ai?",hint:"Chỉ nhóm chim mới có lông vũ.",opts:[{id:"p",img:"id_11"},{id:"s",img:"id_09"},{id:"f",img:"tex_02"},{id:"t",img:"g_27"}],ans:"p",write:""},
  {type:"choice",cmd:"suggest",pg:51,ref:"Thám tử What am I?",q:"I have fur. I give milk to my babies. Who am I?",vi:"Tôi có lông mao. Tôi cho con bú sữa. Tôi là ai?",hint:"Mèo là động vật có vú.",opts:[{id:"c",img:"id_08"},{id:"f",img:"tex_02"},{id:"h",img:"id_10"},{id:"s",img:"id_09"}],ans:"c",write:""}
 ]});

ST.push({
 id:4,
 pages:[52,53],
 title:"Nhà phát minh khóa nhận dạng",
 en:"Differences between vertebrate groups",
 role:"Nhà phát minh Key · Key Inventor",
 img:"tex_09",
 mission:"So sánh 4 nhóm động vật bằng bảng ✓/✗, rồi tự chế tạo khóa phân loại của riêng em.",
 vocab:[{en:"scales",vi:"vảy",img:"tex_09"},{en:"fur or hair",vi:"lông mao",img:"tex_07"},{en:"feathers",vi:"lông vũ",img:"tex_08"},{en:"fins",vi:"vây",img:"tex_02"},{en:"milk",vi:"sữa",img:"tex_14"},{en:"nest",vi:"tổ chim",img:"tex_nest"},{en:"thin moist skin",vi:"da mỏng ẩm",img:"tex_13"}],
 reward:["tex_00","tex_01","tex_02"],
 can:[["I can ask a good question.","Em hỏi được một câu hỏi hay."],["I can split yes/no.","Em chia được nhánh Có/Không."],["I can make a key for 4 groups.","Em làm được khóa cho 4 nhóm."]],
 helper:[["tr.52 câu 1a","Đánh ✓ hoặc ✗ vào bảng đặc điểm."],["tr.52 câu 1b–c","Viết câu hỏi vào ô trên cùng và sau \"Yes\" đầu tiên."],["tr.53 câu 1d","Chọn câu hỏi thứ ba, viết mammal / bird vào ô trả lời."]],
 tasks:[
  {type:"table",mode:"mark",cmd:"tick",pg:52,ref:"Câu 1a",q:"Put a tick (✓) or cross (✗) to describe the animal groups. One has been done for you.",vi:"Đánh ✓ hoặc ✗ để mô tả các nhóm động vật. Một ô đã được làm sẵn.",hint:"Chạm một lần = ✓, chạm hai lần = ✗. Mammal: lông mao. Bird: lông vũ. Reptile & fish: vảy. Fish: vây.",corner:"Does it…",cols:[{id:"m",t:"mammal",img:"tex_00"},{id:"b",t:"bird",img:"tex_01"},{id:"r",t:"reptile",img:"g_27"},{id:"f",t:"fish",img:"tex_02"}],rows:[{id:"r0",t:"have scales?"},{id:"r1",t:"have fur or hair?"},{id:"r2",t:"have feathers?"},{id:"r3",t:"swim with fins?"}],pre:{"r0|m":"x"},ans:{"r0|m":"x","r0|b":"x","r0|r":"v","r0|f":"v","r1|m":"v","r1|b":"x","r1|r":"x","r1|f":"x","r2|m":"x","r2|b":"v","r2|r":"x","r2|f":"x","r3|m":"x","r3|b":"x","r3|r":"x","r3|f":"v"},write:""},
  {type:"choice",cmd:"find",pg:52,ref:"Câu 1b",q:"Find the row with more than one tick (✓). Write that question in the top box of the key.",vi:"Tìm hàng có nhiều hơn một dấu ✓. Viết câu hỏi đó vào ô trên cùng của khóa.",hint:"Hàng \"have scales?\" có 2 dấu ✓ (reptile và fish).",opts:[{id:"r0",t:"Does it have scales?"},{id:"r1",t:"Does it have fur or hair?"},{id:"r2",t:"Does it have feathers?"},{id:"r3",t:"Does it swim with fins?"}],ans:"r0",shuffle:false},
  {type:"cloze",cmd:["complete","write"],pg:"52–53",ref:"Câu 1c–d",q:"Make your own key: write the questions and the answers (mammal, bird, fish, reptile) in the boxes.",vi:"Tự làm khóa phân loại: điền câu hỏi và đáp án (mammal, bird, fish, reptile) vào các ô.",hint:"Ô trên: have scales? Sau \"Yes\" thứ nhất: swim with fins? (fish / reptile). Nhánh \"No\": hỏi fur hoặc feathers (mammal / bird).",tpl:"<div style=\"display:grid;grid-template-columns:1fr 1fr;gap:14px;text-align:center;line-height:1.7\"><div style=\"grid-column:1/3\">{top}</div><div><b>Yes</b><br>{q1}</div><div><b>No</b><br>{q2}</div><div><b>Yes</b> {l1}<br><b>No</b> {l2}</div><div><b>Yes</b> {l3}<br><b>No</b> {l4}</div></div>",slots:{top:{ans:["Does it have scales?"]},q1:{ans:["Does it swim with fins?"]},l1:{ans:["fish"]},l2:{ans:["reptile"]},q2:{ans:["Does it have fur or hair?","Does it have feathers?"]},l3:{ans:["mammal","bird"]},l4:{ans:["mammal","bird"]}},bank:["Does it have scales?","Does it swim with fins?","Does it have fur or hair?","Does it have feathers?","mammal","bird","fish","reptile"],cls:"keyb",validate(v){const f=v.q2==='Does it have fur or hair?',a=v.q2==='Does it have feathers?';
    if(f&&!(v.l3==='mammal'&&v.l4==='bird'))return{bad:['l3','l4'],msg:'Có lông mao → mammal; không → bird.'};
    if(a&&!(v.l3==='bird'&&v.l4==='mammal'))return{bad:['l3','l4'],msg:'Có lông vũ → bird; không → mammal.'};return true;},autoText:"have scales? → swim with fins? (fish / reptile) · fur or feathers? (mammal / bird)"},
  {type:"place",cmd:"sort",pg:52,ref:"Cửa hàng xáo trộn",q:"Sort the clues into the correct shelf.",vi:"Xếp mỗi manh mối lên đúng kệ nhóm. Có manh mối đúng với 2 nhóm!",hint:"Vảy: reptile và fish. Trứng đẻ trên cạn: bird và reptile. Sữa và lông mao: mammal.",write:"",slots:[{id:"m",t:"mammal",vi:"có vú",img:"tex_00"},{id:"b",t:"bird",vi:"chim",img:"tex_01"},{id:"r",t:"reptile",vi:"bò sát",img:"g_27"},{id:"f",t:"fish",vi:"cá",img:"tex_02"}],cards:[{id:"milk",img:"tex_14",t:"milk"},{id:"nest",img:"tex_nest",t:"lay eggs on land"},{id:"sc",img:"tex_09",t:"scales"},{id:"fin",img:"tex_02",t:"fins"},{id:"fea",img:"tex_08",t:"feathers"},{id:"fur",img:"tex_07",t:"fur"}],map:{milk:"m",nest:["b","r"],sc:["r","f"],fin:"f",fea:"b",fur:"m"}}
 ]});

ST.push({
 id:5,
 pages:[54,55],
 title:"Ba bí kíp sự sống",
 en:"Life processes",
 role:"Chuyên gia Sự sống · Life Expert",
 img:"act_03",
 mission:"Nhận ra 3 quá trình sống của động vật: di chuyển, lớn lên và dinh dưỡng.",
 vocab:[{en:"life process",vi:"quá trình sống",img:"nat_03"},{en:"movement",vi:"sự di chuyển",img:"act_02"},{en:"growth",vi:"sự lớn lên",img:"act_01"},{en:"nutrition",vi:"dinh dưỡng (ăn uống)",img:"act_03"},{en:"eating",vi:"đang ăn",img:"nat_00"},{en:"make more living things",vi:"tạo ra thêm sinh vật mới (đẻ con, đẻ trứng)",img:"act_04"}],
 reward:["act_03","act_02","act_01"],
 can:[["I can name 3 life processes.","Em gọi tên được 3 quá trình sống."],["I know washing is not a life process.","Em biết rửa tay không phải quá trình sống."],["I can match movement, growth, nutrition.","Em nối được movement, growth, nutrition."]],
 helper:[["tr.54 câu 1","Viết tên quá trình sống dưới mỗi hình."],["tr.54 câu 2","Khoanh từ KHÔNG phải quá trình sống."],["tr.55 câu 3–4","Hoàn thành bảng và tick ✓ một ô mỗi hàng."]],
 tasks:[
  {type:"cloze",cmd:["name","write"],pg:54,ref:"Câu 1",q:"Write the name of the life process shown in each picture.",vi:"Viết tên quá trình sống được thể hiện trong mỗi hình.",hint:"Ăn = nutrition. Nhảy/chạy = movement. Gà mái đẻ trứng và có gà con = make more living things (tạo ra thêm sinh vật mới). Mèo con lớn lên = growth.",kw:[["life process","quá trình sống"],["make more living things","tạo ra thêm sinh vật mới"]],tpl:"<div class=\"pair\">{img:act_03}{a}</div><div class=\"pair\">{img:act_12}{b}</div><div class=\"pair\">{img:act_04}{c}</div><div class=\"pair\">{img:act_01}{d}</div>",slots:{a:{ans:["nutrition"]},b:{ans:["movement"]},c:{ans:["make more living things"]},d:{ans:["growth"]}},bank:["movement","growth","nutrition","make more living things"],reuse:true,autoText:"nutrition · movement · make more living things · growth"},
  {type:"choice",cmd:"circle",pg:54,ref:"Câu 2",q:"Which of these is not a life process? Circle your answer.",vi:"Cái nào KHÔNG phải là quá trình sống? Khoanh đáp án.",kw:[["washing","rửa / tắm giặt"]],hint:"Động vật không cần \"washing\" để sống như cần ăn, lớn lên, di chuyển.",opts:[{id:"growth",t:"growth"},{id:"movement",t:"movement"},{id:"nutrition",t:"nutrition"},{id:"washing",t:"washing"}],ans:"washing",shuffle:false},
  {type:"cloze",cmd:"complete",pg:55,ref:"Câu 3",q:"Complete the table about three life processes.",vi:"Hoàn thành bảng về ba quá trình sống.",hint:"Tăng kích thước = growth. Nutrition = taking in food. Đi sang chỗ khác = movement.",tpl:"<table><tr><th>Life process</th><th>Description</th></tr><tr><td>{a}</td><td>increasing in size</td></tr><tr><td>nutrition</td><td>{b}</td></tr><tr><td>{c}</td><td>going to another place or changing position</td></tr></table>",slots:{a:{ans:["growth"]},b:{ans:["taking in food"]},c:{ans:["movement"]}},bank:["growth","movement","taking in food","sleeping"]},
  {type:"table",cmd:"tick",pg:55,ref:"Câu 4",q:"Put one tick (✓) in each row to show which life process is described.",vi:"Mỗi hàng đánh MỘT dấu ✓ để chỉ ra quá trình sống được mô tả.",hint:"Ăn → Nutrition. Cao lên → Growth. Chạy → Movement.",cols:[{id:"m",t:"Movement"},{id:"g",t:"Growth"},{id:"n",t:"Nutrition"}],rows:[{id:"1",t:"a bird eating a worm",img:"tex_06",ans:"n"},{id:"2",t:"becoming taller",img:"act_16",ans:"g"},{id:"3",t:"having noodles for lunch",img:"nat_00",ans:"n"},{id:"4",t:"a cheetah running",img:"nat_17",ans:"m"}],write:"chim ăn sâu = Nutrition · cao lên = Growth · ăn mì = Nutrition · báo chạy = Movement"}
 ]});

ST.push({
 id:6,
 pages:[56,57],
 title:"Vũ điệu di chuyển",
 en:"Animals move in different ways",
 role:"Chuyên gia Chuyển động · Movement Expert",
 img:"act_02",
 mission:"Gọi tên các cách di chuyển: chạy, nhảy, đi bộ, đá, leo trèo, bơi, bay.",
 vocab:[{en:"running",vi:"chạy",img:"act_06"},{en:"jumping",vi:"nhảy",img:"act_07"},{en:"walking",vi:"đi bộ",img:"act_05"},{en:"kicking",vi:"đá",img:"act_09"},{en:"climbing",vi:"leo trèo",img:"act_08"},{en:"swimming",vi:"bơi",img:"act_10"},{en:"flying",vi:"bay",img:"act_11"},{en:"sitting",vi:"ngồi",img:"act_13"}],
 reward:["act_12","act_11","nat_13"],
 can:[["I can say running, jumping, walking.","Em nói được running, jumping, walking."],["I can name ways animals move.","Em kể được các cách động vật di chuyển."],["I can name ways birds move.","Em kể được cách chim di chuyển."]],
 helper:[["tr.56 câu 1","Nối mỗi con vật với cách nó đang di chuyển."],["tr.56 câu 2","Khoanh con vật đang di chuyển; viết các con kia đang làm gì."],["tr.57 câu 3–4","Vẽ con vật leo trèo, bơi; viết cách chim di chuyển."]],
 tasks:[
  {type:"match",cmd:"match",pg:56,ref:"Câu 1",q:"Draw lines to match each animal to the way it is moving.",vi:"Nối mỗi con vật với cách nó đang di chuyển.",hint:"Nhìn tư thế chân: chạy nhanh, nhảy lên, đi từng bước, đá chân.",say:true,left:[{id:"a",img:"act_02"},{id:"b",img:"act_12"},{id:"c",img:"g_05"},{id:"d",img:"act_09"}],right:[{id:"running",t:"running"},{id:"kicking",t:"kicking"},{id:"jumping",t:"jumping"},{id:"walking",t:"walking"}],pairs:{a:"running",b:"jumping",c:"walking",d:"kicking"}},
  {type:"choice",cmd:"circle",pg:56,ref:"Câu 2a",q:"Circle the animal below that is moving.",vi:"Khoanh con vật bên dưới đang di chuyển.",hint:"Con nào đang nhảy, còn con khác chỉ ngồi yên.",opts:[{id:"j",img:"act_12"},{id:"s1",img:"anat_12"},{id:"s2",img:"g_02"},{id:"s3",img:"act_18"}],ans:"j",write:""},
  {type:"choice",cmd:"write",pg:56,ref:"Câu 2b",q:"What are the other animals doing?",vi:"Những con vật còn lại đang làm gì?",hint:"Chúng không di chuyển, chúng đang ngồi.",figs:["anat_12","g_02","act_18"],opts:[{id:"sitting",t:"sitting"},{id:"jumping",t:"jumping"},{id:"swimming",t:"swimming"},{id:"flying",t:"flying"}],ans:"sitting"},
  {type:"drawpick",cmd:"draw",pg:57,ref:"Câu 3a",q:"Draw an animal that is climbing.",vi:"Vẽ một con vật đang leo trèo.",hint:"Chọn tranh có con vật bám vào thân cây.",boxes:[{id:"b",title:"Climbing",ph:"Thả tranh vào đây",label:"climbing",accept:id=>['koala','boy'].includes(id)}],bank:[{id:"koala",img:"nat_13"},{id:"boy",img:"act_08"},{id:"bird",img:"act_11",why:"Con chim đang bay, không phải leo."},{id:"chee",img:"nat_17",why:"Báo đang chạy."},{id:"girl",img:"act_10",why:"Bạn nhỏ đang bơi."},{id:"cat",img:"act_14",why:"Con mèo đang ngủ."}]},
  {type:"drawpick",cmd:"draw",pg:57,ref:"Câu 3b",q:"Draw an animal that is swimming.",vi:"Vẽ một con vật đang bơi.",hint:"Chọn con vật ở trong nước.",boxes:[{id:"b",title:"Swimming",ph:"Thả tranh vào đây",label:"swimming",accept:id=>['fish','dol','frog','girl','whale'].includes(id)}],bank:[{id:"fish",img:"tex_02"},{id:"dol",img:"g_32"},{id:"whale",img:"g_39"},{id:"frog",img:"swamp_14"},{id:"girl",img:"act_10"},{id:"bird",img:"act_11",why:"Con chim đang bay."},{id:"chee",img:"nat_17",why:"Báo đang chạy."},{id:"cat",img:"act_14",why:"Con mèo đang ngủ."}]},
  {type:"cloze",cmd:["write","list"],pg:57,ref:"Câu 4",q:"Write some ways in which birds move.",vi:"Viết một vài cách chim di chuyển.",hint:"Chim có cánh, có hai chân. Chọn 2 cách đúng.",figs:["act_11","tex_01"],tpl:"Birds can {a} and {b}.",slots:{a:{ans:[]},b:{ans:[]}},groups:[{slots:["a","b"],pool:["fly","walk","hop","swim","run"],distinct:true}],bank:["fly","hop","walk","swim","climb","kick","crawl"],autoText:"fly, hop (hoặc walk / run / swim)"}
 ]});

ST.push({
 id:7,
 pages:[58,59],
 title:"Mẹ và con lớn lên",
 en:"Animals grow",
 role:"Chuyên gia Lớn lên · Growth Expert",
 img:"act_01",
 mission:"Nhận ra con non và con trưởng thành, biết rằng mọi động vật đều lớn lên và thay đổi.",
 vocab:[{en:"baby",vi:"con non / em bé",img:"act_15"},{en:"adult",vi:"con trưởng thành",img:"act_16"},{en:"kitten",vi:"mèo con",img:"act_01"},{en:"chick",vi:"gà con",img:"g_18"},{en:"penguin",vi:"chim cánh cụt",img:"g_26"},{en:"milk",vi:"sữa",img:"tex_14"},{en:"grow",vi:"lớn lên",img:"nat_03"}],
 reward:["act_01","g_18","g_26"],
 can:[["I can find baby animals.","Em tìm được con non."],["I can match baby to adult.","Em nối được con non với con lớn."],["All animals grow and change.","Mọi động vật đều lớn lên và thay đổi."]],
 helper:[["tr.58 câu 1–2","Khoanh gà con; nối con non với con trưởng thành."],["tr.59 câu 3","Mèo lớn = cat, mèo con uống milk, vẽ mèo lớn."],["tr.59 câu 4","Viết 2 điểm khác nhau giữa chim cánh cụt lớn và nhỏ."]],
 tasks:[
  {type:"choice",cmd:"circle",pg:58,ref:"Câu 1",q:"Circle the baby birds.",vi:"Khoanh các chim con.",kw:[["baby","con non"]],hint:"Chim con nhỏ, tròn, lông tơ. Có 2 hình gà con.",multi:true,pick:2,opts:[{id:"c1",img:"g_18"},{id:"h",img:"g_17"},{id:"c2",img:"egg_04"},{id:"r",img:"g_16"}],ans:["c1","c2"],write:""},
  {type:"match",cmd:"match",pg:58,ref:"Câu 2",q:"Draw lines to match each baby animal to the adult it grows into.",vi:"Nối mỗi con non với con trưởng thành mà nó lớn thành.",hint:"Gà con → gà. Vịt con → vịt. Rùa con → rùa. Nòng nọc → ếch.",left:[{id:"a",img:"g_18"},{id:"b",img:"egg_08"},{id:"c",img:"swamp_06"},{id:"d",img:"swamp_10"}],right:[{id:"a",img:"g_17"},{id:"b",img:"egg_09"},{id:"c",img:"swamp_04"},{id:"d",img:"swamp_09"}],pairs:{a:"a",b:"b",c:"c",d:"d"}},
  {type:"choice",cmd:"write",pg:59,ref:"Câu 3a",q:"This is a kitten. What do we call an adult kitten?",vi:"Đây là mèo con. Mèo con khi lớn được gọi là gì?",kw:[["kitten","mèo con"]],fig:"act_01",hint:"Nhìn dãy hình: mèo con → mèo lớn.",opts:[{id:"cat",t:"cat"},{id:"puppy",t:"puppy"},{id:"dog",t:"dog"},{id:"kitten",t:"kitten"}],ans:"cat"},
  {type:"spell",cmd:"write",pg:59,ref:"Câu 3b",q:"What is the kitten drinking?",vi:"Mèo con đang uống gì?",hint:"Mèo con bú sữa mẹ hoặc uống sữa bình.",img:"tex_14",word:"milk",extra:"ts"},
  {type:"drawpick",cmd:"draw",pg:59,ref:"Câu 3c",q:"Draw what you think this kitten will look like as an adult.",vi:"Vẽ điều em nghĩ mèo con này sẽ trông thế nào khi trưởng thành.",hint:"Mèo con lớn lên thành mèo.",boxes:[{id:"b",title:"Adult cat",ph:"Thả tranh vào đây",label:"adult cat",accept:id=>['c1','c2','c3'].includes(id)}],bank:[{id:"c1",img:"act_18"},{id:"c2",img:"g_00"},{id:"c3",img:"act_14"},{id:"d",img:"g_01",why:"Đó là chó, không phải mèo."},{id:"r",img:"g_02",why:"Đó là thỏ."}]},
  {type:"choice",cmd:["write","compare"],pg:59,ref:"Câu 4",q:"Write two ways that the adult penguins differ from the baby penguins.",vi:"Viết hai điểm chim cánh cụt lớn khác với chim cánh cụt con.",kw:[["differ","khác nhau"]],fig:"g_26",multi:true,pick:2,hint:"Con lớn to hơn và bộ lông khác con non (con non có lông tơ xám).",opts:[{id:"a",t:"Adults are bigger."},{id:"b",t:"Adults have different feathers."},{id:"c",t:"Adults have fur."},{id:"d",t:"Adults have no backbone."},{id:"e",t:"Babies can fly."}],ans:["a","b"],write:"Adults are bigger · Adults have different feathers"}
 ]});

ST.push({
 id:8,
 pages:[60,61],
 title:"Trứng to, trứng nhỏ",
 en:"Big eggs and small eggs",
 role:"Nhà khoa học Trứng · Egg Scientist",
 img:"egg_17",
 mission:"Quan sát, đo và so sánh những quả trứng như một nhà khoa học.",
 vocab:[{en:"nest",vi:"tổ",img:"egg_nest"},{en:"egg",vi:"quả trứng",img:"egg_01"},{en:"observation",vi:"sự quan sát",img:"egg_14"},{en:"measure",vi:"đo",img:"egg_12"},{en:"compare",vi:"so sánh",img:"egg_13"},{en:"similar",vi:"giống nhau",img:"egg_18"},{en:"different",vi:"khác nhau",img:"egg_21"},{en:"largest",vi:"lớn nhất",img:"egg_19"}],
 reward:["egg_nest","egg_04","egg_07"],
 can:[["I can describe an egg.","Em tả được một quả trứng."],["I can compare big and small eggs.","Em so sánh được trứng to và nhỏ."],["I can say similar and different.","Em nói được similar và different."]],
 helper:[["tr.60 câu 1","Viết nest, mô tả trứng, khoanh trứng giống, ghi số trứng to nhất."],["tr.61 câu 2","Điền measuring, different, compare, observations."],["tr.61 câu 3","Viết 1 điểm giống và 1 điểm khác của trứng A và B."]],
 tasks:[
  {type:"spell",cmd:"write",pg:60,ref:"Câu 1a",q:"What do we call this place where birds lay their eggs?",vi:"Nơi chim đẻ trứng này được gọi là gì?",img:"egg_nest",word:"nest",extra:"ob",hint:"Chim làm nó bằng cành cây nhỏ."},
  {type:"choice",cmd:"write",pg:60,ref:"Câu 1b",q:"What is growing inside the eggs?",vi:"Bên trong những quả trứng đang có gì lớn lên?",fig:"egg_05",hint:"Nhìn hình trứng cắt ra: có một em bé bên trong.",opts:[{id:"b",t:"a baby bird",vi:"chim con"},{id:"w",t:"water",vi:"nước"},{id:"s",t:"a stone",vi:"hòn đá"},{id:"l",t:"a leaf",vi:"chiếc lá"}],ans:"b"},
  {type:"choice",cmd:"describe",pg:60,ref:"Câu 1c",q:"Describe the eggs in the picture.",vi:"Mô tả những quả trứng trong hình (hình dạng, kích thước, bề mặt).",fig:"egg_nest",multi:true,subset:3,hint:"Chọn 3 từ đúng: trứng hình bầu dục, nhỏ, nhẵn.",opts:[{id:"a",t:"oval",vi:"bầu dục"},{id:"b",t:"small",vi:"nhỏ"},{id:"c",t:"smooth",vi:"nhẵn"},{id:"d",t:"square",vi:"vuông"},{id:"e",t:"hairy",vi:"có lông"},{id:"f",t:"huge",vi:"khổng lồ"}],ans:["a","b","c"],write:"oval, small, smooth"},
  {type:"choice",cmd:"circle",pg:60,ref:"Câu 1d",q:"Circle one egg that is similar to the ones above.",vi:"Khoanh MỘT quả trứng giống những quả ở trên (trong tổ là trứng nhỏ, màu xanh ngọc, có đốm).",kw:[["similar","giống nhau"]],hint:"Tìm quả nhỏ, màu xanh ngọc có đốm: số 2.",opts:[{id:"e1",img:"eggc1",t:"1",px:70},{id:"e2",img:"eggc2",t:"2",px:74},{id:"e3",img:"eggc3",t:"3",px:100},{id:"e4",img:"eggc4",t:"4",px:129}],ans:"e2",shuffle:false},
  {type:"choice",cmd:"write",pg:60,ref:"Câu 1e",q:"What is the number of the largest egg?",vi:"Số của quả trứng lớn nhất là số mấy?",kw:[["largest","lớn nhất"]],hint:"So sánh kích thước bốn quả trứng.",opts:[{id:"e1",img:"eggc1",t:"1",px:70},{id:"e2",img:"eggc2",t:"2",px:74},{id:"e3",img:"eggc3",t:"3",px:100},{id:"e4",img:"eggc4",t:"4",px:129}],ans:"e4",shuffle:false},
  {type:"cloze",cmd:"complete",pg:61,ref:"Câu 2",q:"Write one word from the box in each space.",vi:"Viết một từ trong khung vào mỗi chỗ trống.",kw:[["measuring","đo"],["compare","so sánh"],["observations","quan sát"],["different","khác nhau"]],hint:"Làm quan sát = make observations. Đo chiều cao = measuring. So sánh = compare, tìm điểm giống và khác = different.",tpl:"Scientists look at things to make {a}.<br>Scientists find out how tall things are by {b} them.<br>Scientists {c} things by looking at how similar they are and how they are {d}.",slots:{a:{ans:["observations"]},b:{ans:["measuring"]},c:{ans:["compare"]},d:{ans:["different"]}},bank:["measuring","different","compare","observations"]},
  {type:"choice",cmd:"write",pg:61,ref:"Câu 3 (giống)",q:"Write one way eggs A and B are similar.",vi:"Viết một điểm giống nhau của trứng A và trứng B.",figs:["eggA","eggB"],hint:"Cả hai đều có hình bầu dục và có đốm.",opts:[{id:"a",t:"Both are oval."},{id:"b",t:"Both are the same size."},{id:"c",t:"Both are blue."}],ans:"a"},
  {type:"choice",cmd:"write",pg:61,ref:"Câu 3 (khác)",q:"Write one way eggs A and B differ.",vi:"Viết một điểm khác nhau của trứng A và trứng B.",figs:["eggA","eggB"],hint:"Nhìn kích thước hai quả.",opts:[{id:"a",t:"Egg A is bigger than egg B."},{id:"b",t:"Egg B is bigger than egg A."},{id:"c",t:"Egg A has no shell."}],ans:"a"}
 ]});

ST.push({
 id:9,
 pages:[62,63],
 title:"Hành trình chú chim non",
 en:"Birds grow and change",
 role:"Chuyên gia Chim · Bird Expert",
 img:"egg_07",
 mission:"Theo dõi vòng đời của chim: từ trứng trong tổ đến chim con, và gọi tên các bộ phận cơ thể của vịt.",
 vocab:[{en:"nest",vi:"tổ",img:"egg_nest"},{en:"egg shell",vi:"vỏ trứng",img:"egg_02"},{en:"beak",vi:"mỏ",img:"egg_03"},{en:"chick",vi:"gà con",img:"egg_04"},{en:"duckling",vi:"vịt con",img:"egg_08"},{en:"duck",vi:"con vịt",img:"egg_09"},{en:"neck",vi:"cổ",img:"egg_10"},{en:"foot",vi:"bàn chân",img:"egg_11"}],
 reward:["egg_09","egg_08","egg_07"],
 can:[["I can say nest and egg.","Em nói được nest và egg."],["I can order the life of a bird.","Em xếp được vòng đời của chim."],["I can label head, neck, beak, foot.","Em ghi được head, neck, beak, foot."]],
 helper:[["tr.62 câu 1–2","Khoanh 2 từ nơi chim đẻ trứng; trả lời về vịt A–D."],["tr.62 câu 3","Viết số 1–4 dưới mỗi hình theo thứ tự."],["tr.63 câu 4","Ghi nhãn head, foot, neck, beak và nêu màu lông."]],
 tasks:[
  {type:"choice",cmd:"circle",pg:62,ref:"Câu 1",q:"Circle two words to show where birds lay eggs.",vi:"Khoanh HAI từ cho biết chim đẻ trứng ở đâu.",hint:"Chim đẻ trứng trong tổ, trên cạn.",multi:true,pick:2,opts:[{id:"water",t:"water"},{id:"nest",t:"nest"},{id:"land",t:"land"},{id:"house",t:"house"},{id:"bed",t:"bed"}],ans:["nest","land"]},
  {type:"choice",cmd:"find",pg:62,ref:"Câu 2a",q:"All these pictures show ducks. Which letters show living ducks?",vi:"Tất cả các hình đều là vịt. Những chữ cái nào là vịt SỐNG?",kw:[["living","đang sống"]],hint:"Vịt đồ chơi bằng cao su không phải là sinh vật sống.",figs:["ducksA","ducksB","ducksC","ducksD"],multi:true,opts:[{id:"A",t:"A"},{id:"B",t:"B"},{id:"C",t:"C"},{id:"D",t:"D"}],ans:["A","B","D"],shuffle:false,write:"A, B, D"},
  {type:"choice",cmd:"write",pg:62,ref:"Câu 2b",q:"Which letter shows adult ducks?",vi:"Chữ cái nào cho thấy những con vịt trưởng thành?",kw:[["adult","trưởng thành"]],hint:"Vịt trưởng thành to nhất và đã mọc đủ lông.",figs:["ducksA","ducksB","ducksC","ducksD"],opts:[{id:"A",t:"A"},{id:"B",t:"B"},{id:"C",t:"C"},{id:"D",t:"D"}],ans:"B",shuffle:false},
  {type:"choice",cmd:"write",pg:62,ref:"Câu 2c",q:"Which group of living ducks is the oldest?",vi:"Nhóm vịt sống nào già (lớn tuổi) nhất?",kw:[["oldest","già nhất"]],hint:"Vịt trưởng thành là nhóm lớn tuổi nhất.",figs:["ducksA","ducksB","ducksD"],opts:[{id:"A",t:"A"},{id:"B",t:"B"},{id:"D",t:"D"}],ans:"B",shuffle:false},
  {type:"order",cmd:"order",pg:62,ref:"Câu 3a",q:"Write 1, 2, 3 or 4 under each picture to show the order in which they happen.",vi:"Viết 1, 2, 3 hoặc 4 dưới mỗi hình để chỉ thứ tự chúng xảy ra.",hint:"Trứng → trứng nứt → gà con chui ra → gà con.",items:[{id:"1",img:"egg_01",t:"egg"},{id:"2",img:"egg_02",t:"cracked egg"},{id:"3",img:"egg_07",t:"hatching"},{id:"4",img:"egg_04",t:"chick"}]},
  {type:"spell",cmd:"write",pg:63,ref:"Câu 3b",q:"What is the outside of an egg called?",vi:"Phần bên ngoài của quả trứng được gọi là gì?",img:"egg_02",word:"shell",extra:"ag",hint:"Cứng, bảo vệ em bé bên trong."},
  {type:"spell",cmd:"write",pg:63,ref:"Câu 3c",q:"What does the chick use to crack the egg open?",vi:"Gà con dùng gì để mổ vỡ quả trứng?",img:"egg_03",word:"beak",extra:"ol",hint:"Mũi tên chỉ vào bộ phận nhọn ở miệng."},
  {type:"label",cmd:["label","write"],pg:63,ref:"Câu 4a",q:"Label head, foot, neck and beak on this duck. Use a line and a word each time.",vi:"Ghi nhãn head (đầu), foot (chân), neck (cổ) và beak (mỏ) trên con vịt. Mỗi lần dùng một đường kẻ và một từ.",img:"egg_09",pins:[{x:36,y:10,ans:"head",dir:"r"},{x:10,y:29,ans:"beak",dir:"d"},{x:34,y:52,ans:"neck",dir:"l"},{x:52,y:93,ans:"foot",dir:"r"}],bank:["head","foot","neck","beak"],hint:"Mỏ ở đầu nhọn phía trước. Cổ nằm giữa đầu và thân."},
  {type:"choice",cmd:"describe",pg:63,ref:"Câu 4b",q:"What colour feathers can you see on this duck?",vi:"Em thấy những màu lông nào trên con vịt này? (vịt đực mallard)",hint:"Đầu xanh lục, thân nâu và xám, có vệt trắng.",fig:"egg_09",multi:true,subset:2,opts:[{id:"g",t:"green"},{id:"b",t:"brown"},{id:"y",t:"grey"},{id:"w",t:"white"},{id:"p",t:"pink"},{id:"u",t:"purple"}],ans:["g","b","y","w"],write:"green, brown, grey, white"}
 ]});

ST.push({
 id:10,
 pages:[64,65],
 title:"Làng bò sát",
 en:"Reptiles",
 role:"Chuyên gia Bò sát · Reptile Expert",
 img:"swamp_00",
 mission:"Khám phá cá sấu và rùa: bộ phận cơ thể, lớp da vảy và vòng đời của rùa.",
 vocab:[{en:"crocodile",vi:"cá sấu",img:"swamp_00"},{en:"scales",vi:"vảy",img:"tex_12"},{en:"teeth",vi:"răng",img:"swamp_01"},{en:"eyes",vi:"mắt",img:"swamp_02"},{en:"mouth",vi:"miệng",img:"swamp_03"},{en:"turtle",vi:"con rùa",img:"swamp_04"},{en:"life cycle",vi:"vòng đời",img:"swamp_05"},{en:"snake",vi:"con rắn",img:"tex_05"}],
 reward:["swamp_00","swamp_04","swamp_06"],
 can:[["I can label a crocodile.","Em ghi nhãn được cá sấu."],["I know reptiles have dry scaly skin.","Em biết bò sát có da khô có vảy."],["I can read the life cycle of a turtle.","Em đọc được vòng đời của rùa."]],
 helper:[["tr.64 câu 1a–e","Ghi nhãn, khoanh chân, kể tên bò sát không chân, mô tả da."],["tr.65 câu 2a–b","Hoàn thành tiêu đề, viết tên từng bước vòng đời rùa."],["tr.65 câu 2c–d","Khoanh nhóm của rùa; viết nơi rùa đẻ trứng."]],
 tasks:[
  {type:"label",cmd:["label","write"],pg:64,ref:"Câu 1a",q:"This is the head end of a crocodile. Label its scales, eyes, mouth and teeth with a line and a word each time.",vi:"Đây là đầu cá sấu. Ghi nhãn vảy (scales), mắt (eyes), miệng (mouth) và răng (teeth): mỗi lần một đường kẻ và một từ.",img:"swamp_00",pins:[{x:25,y:12,ans:"scales",dir:"u"},{x:62,y:32,ans:"eyes",dir:"u"},{x:78,y:62,ans:"mouth",dir:"d"},{x:90,y:45,ans:"teeth",dir:"u"}],bank:["scales","eyes","mouth","teeth"],hint:"Vảy phủ trên lưng; răng nhọn nằm trong miệng."},
  {type:"hotspot",cmd:"circle",pg:64,ref:"Câu 1b",q:"Circle the crocodile's leg.",vi:"Khoanh chân của cá sấu.",kw:[["leg","chân"]],img:"swamp_00",targets:[{x:36,y:60,w:24,h:34},{x:2,y:42,w:22,h:42}],need:1,hint:"Chân có ngón, nằm ở dưới thân."},
  {type:"choice",cmd:"name",pg:64,ref:"Câu 1c",q:"Name a reptile that does not have legs.",vi:"Kể tên một loài bò sát KHÔNG có chân.",hint:"Nó trườn trên mặt đất.",opts:[{id:"s",img:"tex_05",t:"snake"},{id:"t",img:"g_27",t:"turtle"},{id:"l",img:"tex_03",t:"lizard"},{id:"c",img:"g_29",t:"crocodile"}],ans:"s"},
  {type:"cloze",cmd:"complete",pg:64,ref:"Câu 1d",q:"Crocodiles have a backbone. This means they are ______.",vi:"Cá sấu có xương sống. Điều này có nghĩa chúng là ______.",hint:"Động vật có xương sống = vertebrates.",tpl:"This means they are {a}.",slots:{a:{ans:["vertebrates"]}},bank:["vertebrates","invertebrates","plants","insects"]},
  {type:"choice",cmd:"describe",pg:64,ref:"Câu 1e",q:"Describe the crocodile's skin.",vi:"Mô tả lớp da của cá sấu.",hint:"Da bò sát khô và có vảy.",fig:"tex_12",multi:true,subset:2,opts:[{id:"a",t:"dry"},{id:"b",t:"scaly"},{id:"c",t:"rough"},{id:"d",t:"furry"},{id:"e",t:"slimy"},{id:"f",t:"feathery"}],ans:["a","b","c"],write:"dry, scaly (rough)"},
  {type:"cloze",cmd:"complete",pg:65,ref:"Câu 2a",q:"The diagram shows the life of a turtle. Complete the title of the diagram: Life c____ of a t____",vi:"Sơ đồ cho thấy cuộc đời của rùa. Hoàn thành tiêu đề: Life c____ of a t____ (gõ phần còn thiếu).",hint:"Life cycle of a turtle. Gõ \"ycle\" và \"urtle\" (hoặc cả từ).",fig:"swamp_05",tpl:"Life c{a} of a t{b}",slots:{a:{input:1,ans:["ycle","cycle"]},b:{input:1,ans:["urtle","turtle"]}},autoText:"Life cycle of a turtle"},
  {type:"label",cmd:["write"],pg:65,ref:"Câu 2b",q:"Write one of these by each picture: eggs, adult, egg hatching, baby turtle.",vi:"Viết một trong các từ này cạnh mỗi hình: trứng, trưởng thành, trứng đang nở, rùa con.",img:"swamp_05",pins:[{x:14,y:50,ans:"eggs",dir:"d"},{x:50,y:16,ans:"egg hatching",dir:"r"},{x:85,y:42,ans:"baby turtle",dir:"d"},{x:42,y:72,ans:"adult",dir:"d"}],bank:["eggs","adult","egg hatching","baby turtle"],hint:"Theo chiều mũi tên: trứng → trứng nở → rùa con → rùa lớn."},
  {type:"choice",cmd:"circle",pg:65,ref:"Câu 2c",q:"Turtles belong to which of these groups? Circle your answer.",vi:"Rùa thuộc nhóm nào dưới đây? Khoanh đáp án.",hint:"Rùa có da vảy khô.",opts:[{id:"mammals",t:"mammals"},{id:"birds",t:"birds"},{id:"amphibians",t:"amphibians"},{id:"reptiles",t:"reptiles"}],ans:"reptiles",shuffle:false},
  {type:"choice",cmd:"write",pg:65,ref:"Câu 2d",q:"Where does a turtle lay her eggs?",vi:"Rùa đẻ trứng ở đâu?",hint:"Rùa đẻ trứng trong hố cát trên cạn.",opts:[{id:"l",t:"on land",vi:"trên cạn (trong cát)"},{id:"w",t:"in the water",vi:"dưới nước"},{id:"t",t:"in a tree",vi:"trên cây"},{id:"n",t:"in a bird nest",vi:"trong tổ chim"}],ans:"l",write:"on land (in sand)"}
 ]});

ST.push({
 id:11,
 pages:[66,67],
 title:"Hai cuộc đời của ếch",
 en:"Amphibians",
 role:"Chuyên gia Lưỡng cư · Amphibian Expert",
 img:"swamp_11",
 mission:"Theo dõi sự biến đổi của ếch: trứng, nòng nọc, ếch con rồi ếch trưởng thành.",
 vocab:[{en:"frog",vi:"con ếch",img:"swamp_09"},{en:"eggs",vi:"trứng",img:"swamp_12"},{en:"tadpole",vi:"nòng nọc",img:"swamp_10"},{en:"baby frog",vi:"ếch con",img:"frog_baby"},{en:"adult",vi:"trưởng thành",img:"swamp_09"},{en:"swim",vi:"bơi",img:"swamp_14"},{en:"jump",vi:"nhảy",img:"swamp_17"},{en:"thin moist skin",vi:"da mỏng ẩm",img:"tex_13"}],
 reward:["swamp_09","swamp_10","swamp_17"],
 can:[["I can name 4 stages in a frog life cycle.","Em gọi tên 4 giai đoạn trong vòng đời ếch."],["I know frogs are amphibians.","Em biết ếch là lưỡng cư."],["I can say how tadpoles and frogs move.","Em nói được nòng nọc và ếch di chuyển thế nào."]],
 helper:[["tr.66 câu 1a–b","Viết tiêu đề và ghi nhãn eggs, tadpole, baby frog, adult."],["tr.67 câu 1c–d, 2","Số chân ếch, ếch phủ trứng bằng gì, khoanh swim / jump."],["tr.67 câu 3–4","Viết 2 nhóm của ếch và 3 quá trình sống."]],
 tasks:[
  {type:"choice",cmd:"write",pg:66,ref:"Câu 1a",q:"The diagram shows how a frog changes. Write a title for the diagram.",vi:"Sơ đồ cho thấy ếch thay đổi thế nào. Viết tiêu đề cho sơ đồ.",kw:[["title","tiêu đề"]],hint:"Sơ đồ là một vòng tròn: trứng → nòng nọc → ếch con → ếch lớn.",fig:"swamp_11",opts:[{id:"a",t:"Life cycle of a frog"},{id:"b",t:"What frogs eat"},{id:"c",t:"Frog skin"},{id:"d",t:"Where frogs sleep"}],ans:"a"},
  {type:"match",cmd:["label"],pg:66,ref:"Câu 1b",q:"Label these things on the diagram: eggs, adult, baby frog, tadpole.",vi:"Ghi nhãn các thứ này trên sơ đồ: trứng, trưởng thành, ếch con, nòng nọc.",hint:"Nòng nọc có đuôi, chưa có chân. Ếch con có chân và còn đuôi ngắn.",say:true,left:[{id:"e",img:"swamp_12"},{id:"t",img:"swamp_10"},{id:"b",img:"frog_baby"},{id:"a",img:"swamp_09"}],right:[{id:"e",t:"eggs"},{id:"t",t:"tadpole"},{id:"b",t:"baby frog"},{id:"a",t:"adult"}],pairs:{e:"e",t:"t",b:"b",a:"a"}},
  {type:"order",cmd:"order",pg:66,ref:"Vòng đời ếch",q:"Put the life cycle of a frog in order.",vi:"Sắp xếp vòng đời của ếch theo thứ tự.",hint:"Bắt đầu từ trứng.",items:[{id:"1",img:"swamp_12",t:"eggs"},{id:"2",img:"swamp_10",t:"tadpole"},{id:"3",img:"frog_baby",t:"baby frog"},{id:"4",img:"swamp_09",t:"adult"}]},
  {type:"choice",cmd:"write",pg:67,ref:"Câu 1c",q:"How many legs does an adult frog have?",vi:"Ếch trưởng thành có bao nhiêu chân?",fig:"swamp_09",hint:"Hai chân trước và hai chân sau.",opts:[{id:"2",t:"2"},{id:"4",t:"4"},{id:"6",t:"6"},{id:"8",t:"8"}],ans:"4",shuffle:false},
  {type:"choice",cmd:"write",pg:67,ref:"Câu 1d",q:"What do frogs cover their eggs in?",vi:"Ếch phủ trứng của chúng bằng gì?",fig:"swamp_12",hint:"Lớp nhầy trong suốt như thạch.",opts:[{id:"j",t:"jelly",vi:"thạch / chất nhầy"},{id:"s",t:"sand",vi:"cát"},{id:"f",t:"feathers",vi:"lông vũ"},{id:"h",t:"shell",vi:"vỏ cứng"}],ans:"j"},
  {type:"choice",cmd:"circle",pg:67,ref:"Câu 2a",q:"How do tadpoles move in water? Circle one word.",vi:"Nòng nọc di chuyển trong nước thế nào? Khoanh một từ.",fig:"swamp_10",opts:[{id:"run",t:"run"},{id:"jump",t:"jump"},{id:"walk",t:"walk"},{id:"swim",t:"swim"}],ans:"swim",shuffle:false},
  {type:"choice",cmd:"circle",pg:67,ref:"Câu 2b",q:"How do adult frogs move on land? Circle one word.",vi:"Ếch trưởng thành di chuyển trên cạn thế nào? Khoanh một từ.",fig:"swamp_17",opts:[{id:"jump",t:"jump"},{id:"run",t:"run"},{id:"fly",t:"fly"},{id:"skip",t:"skip"}],ans:"jump",shuffle:false},
  {type:"cloze",cmd:"write",pg:67,ref:"Câu 3",q:"Frogs have a backbone and thin, moist skin. Write two groups this puts them in.",vi:"Ếch có xương sống và da mỏng ẩm. Viết HAI nhóm mà điều này xếp chúng vào.",hint:"Có xương sống → vertebrates. Da mỏng ẩm → amphibians.",tpl:"{a} and {b}",slots:{a:{ans:[]},b:{ans:[]}},groups:[{slots:["a","b"],pool:["vertebrates","amphibians"]}],bank:["vertebrates","amphibians","mammals","reptiles","invertebrates"],autoText:"vertebrates and amphibians"},
  {type:"cloze",cmd:"write",pg:67,ref:"Câu 4",q:"Write three life processes that frogs can do.",vi:"Viết ba quá trình sống mà ếch có thể thực hiện.",hint:"Ba quá trình: di chuyển, lớn lên, dinh dưỡng.",tpl:"1. {a} 2. {b} 3. {c}",slots:{a:{ans:[]},b:{ans:[]},c:{ans:[]}},groups:[{slots:["a","b","c"],pool:["movement","growth","nutrition","make more living things"]}],bank:["movement","growth","nutrition","make more living things","washing"],autoText:"movement, growth, nutrition (hoặc make more living things)"}
 ]});

ST.push({
 id:12,
 pages:[68,69],
 title:"Ăn để sống",
 en:"Nutrition",
 role:"Chuyên gia Dinh dưỡng · Nutrition Expert",
 img:"nat_10",
 mission:"Hiểu vì sao động vật cần ăn, \"máu nóng\" nghĩa là gì và mỗi con vật thích ăn gì.",
 vocab:[{en:"eating",vi:"đang ăn",img:"act_03"},{en:"nutrition",vi:"dinh dưỡng",img:"nat_01"},{en:"energy",vi:"năng lượng",img:"nat_02"},{en:"warm-blooded",vi:"máu nóng",img:"nat_05"},{en:"grass",vi:"cỏ",img:"nat_09"},{en:"meat",vi:"thịt",img:"nat_10"},{en:"seeds",vi:"hạt",img:"nat_11"},{en:"leaves",vi:"lá cây",img:"nat_07"}],
 reward:["nat_12","nat_05","nat_10"],
 can:[["I can say eating is nutrition.","Em nói được ăn uống là nutrition."],["I know mammals and birds are warm-blooded.","Em biết thú và chim là máu nóng."],["I can match animals to food.","Em nối được con vật với thức ăn."]],
 helper:[["tr.68 câu 1–2","Viết con vật đang làm gì, quá trình sống nào, 4 việc cần ăn để làm."],["tr.68 câu 3","Giải thích warm-blooded; khoanh 2 nhóm máu nóng."],["tr.69 câu 4","Điền bảng con vật và thức ăn."]],
 tasks:[
  {type:"choice",cmd:"write",pg:68,ref:"Câu 1a",q:"What is this animal doing?",vi:"Con vật này đang làm gì?",fig:"act_03",opts:[{id:"eating",t:"eating"},{id:"sleeping",t:"sleeping"},{id:"running",t:"running"},{id:"swimming",t:"swimming"}],ans:"eating",shuffle:false},
  {type:"choice",cmd:"write",pg:68,ref:"Câu 1b",q:"Which life process is this?",vi:"Đây là quá trình sống nào?",fig:"act_03",hint:"Ăn uống là quá trình dinh dưỡng.",opts:[{id:"movement",t:"movement"},{id:"growth",t:"growth"},{id:"nutrition",t:"nutrition"}],ans:"nutrition",shuffle:false},
  {type:"choice",cmd:["write","list"],pg:68,ref:"Câu 2",q:"Write four things that animals need to eat food to be able to do.",vi:"Viết bốn việc mà động vật cần ăn thức ăn để có thể làm được.",hint:"Ăn để có năng lượng, lớn lên, di chuyển, khỏe mạnh, sống sót. Plants mới tự làm thức ăn.",multi:true,subset:4,opts:[{id:"a",t:"grow",vi:"lớn lên"},{id:"b",t:"move",vi:"di chuyển"},{id:"c",t:"get energy",vi:"có năng lượng"},{id:"d",t:"stay healthy",vi:"khỏe mạnh"},{id:"e",t:"stay alive",vi:"sống sót"},{id:"f",t:"make food from sunlight",vi:"tự làm thức ăn từ ánh nắng"},{id:"g",t:"turn into a plant",vi:"biến thành cây"}],ans:["a","b","c","d","e"],write:"grow, move, get energy, stay healthy (stay alive)"},
  {type:"choice",cmd:"write",pg:68,ref:"Câu 3a",q:"What does warm-blooded mean?",vi:"\"Warm-blooded\" (máu nóng) nghĩa là gì?",kw:[["warm-blooded","máu nóng"]],fig:"nat_05",hint:"Cơ thể giữ được nhiệt độ ấm, dù trời nóng hay lạnh.",opts:[{id:"a",t:"Body stays warm even when it is cold outside",vi:"Cơ thể luôn ấm dù bên ngoài lạnh"},{id:"b",t:"Body is as cold as the air",vi:"Cơ thể lạnh bằng không khí"},{id:"c",t:"Has red blood only",vi:"Chỉ có máu đỏ"}],ans:"a"},
  {type:"choice",cmd:"circle",pg:68,ref:"Câu 3b",q:"Circle two groups of vertebrates that are warm-blooded.",vi:"Khoanh HAI nhóm động vật có xương sống là máu nóng.",hint:"Động vật có lông mao và có lông vũ.",multi:true,pick:2,opts:[{id:"mammals",t:"mammals"},{id:"fish",t:"fish"},{id:"reptiles",t:"reptiles"},{id:"birds",t:"birds"},{id:"amphibians",t:"amphibians"}],ans:["mammals","birds"]},
  {type:"match",cmd:"match",pg:69,ref:"Câu 4",q:"Find out what some animals you know like to eat. Draw and name the animals too.",vi:"Tìm hiểu một số con vật em biết thích ăn gì. Hãy nối con vật với thức ăn của nó.",hint:"Thỏ ăn cỏ, sư tử ăn thịt, gà ăn hạt, hươu cao cổ ăn lá cây.",say:true,left:[{id:"r",img:"g_02"},{id:"l",img:"nat_16"},{id:"h",img:"g_17"},{id:"g",img:"nat_15"}],right:[{id:"r",img:"nat_09",t:"grass"},{id:"l",img:"nat_10",t:"meat"},{id:"h",img:"nat_11",t:"seeds"},{id:"g",img:"nat_07",t:"leaves"}],pairs:{r:"r",l:"l",h:"h",g:"g"}}
 ]});

ST.push({
 id:13,
 pages:[70,71],
 title:"Ăn và di chuyển",
 en:"Eating and moving",
 role:"Chuyên gia Thức ăn · Diet Expert",
 img:"nat_12",
 mission:"Biết gấu trúc, koala, chim ruồi ăn gì, phân nhóm chúng và vẽ động vật nhanh – chậm.",
 vocab:[{en:"giant panda",vi:"gấu trúc",img:"nat_12"},{en:"koala",vi:"gấu koala",img:"nat_13"},{en:"hummingbird",vi:"chim ruồi",img:"nat_14"},{en:"bamboo",vi:"tre",img:"nat_06"},{en:"nectar",vi:"mật hoa",img:"nat_08"},{en:"fast",vi:"nhanh",img:"nat_18"},{en:"slow",vi:"chậm",img:"nat_19"},{en:"fly",vi:"bay",img:"act_11"}],
 reward:["nat_12","nat_13","nat_14"],
 can:[["I can say what pandas eat.","Em nói được gấu trúc ăn gì."],["I can name the animal group.","Em gọi được tên nhóm động vật."],["I can find fast and slow animals.","Em tìm được động vật nhanh và chậm."]],
 helper:[["tr.70 câu 1–2","Viết thức ăn, bảng nhóm và máu nóng, con vật biết bay."],["tr.71 câu 3a","Vẽ con vật em thích với thức ăn của nó."],["tr.71 câu 3b","Vẽ con vật nhanh và chậm, ghi nhãn."]],
 tasks:[
  {type:"cloze",cmd:"write",pg:70,ref:"Câu 1a",q:"What do these animals eat? Giant panda, koala, hummingbird.",vi:"Những con vật này ăn gì? Gấu trúc, koala, chim ruồi.",hint:"Gấu trúc ăn tre, koala ăn lá bạch đàn, chim ruồi hút mật hoa.",tpl:"<div class=\"pair\">{img:nat_12}Giant panda eats {a}</div><div class=\"pair\">{img:nat_13}Koala eats {b}</div><div class=\"pair\">{img:nat_14}Hummingbird drinks {c}</div>",slots:{a:{ans:["bamboo"]},b:{ans:["eucalyptus leaves"]},c:{ans:["nectar"]}},bank:["bamboo","eucalyptus leaves","nectar","meat","grass"]},
  {type:"choice",cmd:"write",pg:70,ref:"Câu 1b",q:"Which life process is eating?",vi:"Quá trình sống nào là ăn uống?",opts:[{id:"movement",t:"movement"},{id:"growth",t:"growth"},{id:"nutrition",t:"nutrition"}],ans:"nutrition",shuffle:false},
  {type:"cloze",cmd:"complete",pg:70,ref:"Câu 2a",q:"Complete the table for these three animals.",vi:"Hoàn thành bảng cho ba con vật này (thuộc nhóm nào? có phải máu nóng không?).",hint:"Gấu trúc và koala là động vật có vú; chim ruồi là chim. Cả ba đều máu nóng.",tpl:"<table><tr><th>Animal</th><th>Which animal group is it in?</th><th>Is it warm-blooded?</th></tr><tr><td>giant panda</td><td>{a}</td><td>{b}</td></tr><tr><td>koala</td><td>{c}</td><td>{d}</td></tr><tr><td>hummingbird</td><td>{e}</td><td>{f}</td></tr></table>",slots:{a:{ans:["mammal"]},b:{ans:["yes"]},c:{ans:["mammal"]},d:{ans:["yes"]},e:{ans:["bird"]},f:{ans:["yes"]}},bank:["mammal","bird","reptile","yes","no"],reuse:true},
  {type:"choice",cmd:"circle",pg:70,ref:"Câu 2b",q:"Which of the three animals can fly?",vi:"Con nào trong ba con vật có thể bay?",opts:[{id:"p",img:"nat_12",t:"panda"},{id:"k",img:"nat_13",t:"koala"},{id:"h",img:"nat_14",t:"hummingbird"}],ans:"h"},
  {type:"choice",cmd:"write",pg:70,ref:"Câu 2c",q:"Which life process is flying?",vi:"Bay là quá trình sống nào?",fig:"act_11",opts:[{id:"movement",t:"movement"},{id:"growth",t:"growth"},{id:"nutrition",t:"nutrition"}],ans:"movement",shuffle:false},
  {type:"drawpick",cmd:["draw","label"],pg:71,ref:"Câu 3a",q:"Think of an animal you like. Draw it with its food and label what it is eating.",vi:"Nghĩ về một con vật em thích. Vẽ nó cùng thức ăn và ghi nhãn nó đang ăn gì.",hint:"Chọn một con vật rồi chọn đúng thức ăn của nó: gấu trúc – tre, sư tử – thịt, thỏ – cỏ.",boxes:[{id:"an",title:"My animal",ph:"Chọn con vật",accept:id=>['panda','lion','rabbit'].includes(id)},{id:"fd",title:"Its food",ph:"Chọn thức ăn",accept:(id,s)=>{const m={panda:'bamboo',lion:'meat',rabbit:'grass'};if(!s.an)return{ok:false,why:'Hãy chọn con vật trước nhé!'};return m[s.an]===id||{ok:false,why:'Con vật này không ăn món đó. Thử món khác!'};}}],bank:[{id:"panda",img:"nat_12",t:"giant panda"},{id:"lion",img:"nat_16",t:"lion"},{id:"rabbit",img:"g_02",t:"rabbit"},{id:"bamboo",img:"nat_06",t:"bamboo"},{id:"meat",img:"nat_10",t:"meat"},{id:"grass",img:"nat_09",t:"grass"}]},
  {type:"drawpick",cmd:["draw","label"],pg:71,ref:"Câu 3b",q:"Draw one animal that moves fast and one animal that moves very slowly. Label your pictures.",vi:"Vẽ một con vật di chuyển nhanh và một con vật di chuyển rất chậm. Ghi nhãn các hình.",hint:"Nhanh: báo, thỏ chạy. Chậm: rùa, ốc sên, sâu.",boxes:[{id:"f",title:"Fast",label:"fast",accept:id=>['chee','rab'].includes(id)},{id:"s",title:"Very slow",label:"very slow",accept:id=>['tor','snail','cat'].includes(id)}],bank:[{id:"chee",img:"nat_17",t:""},{id:"rab",img:"nat_18"},{id:"tor",img:"nat_19"},{id:"snail",img:"g_46"},{id:"cat",img:"g_47",why:"Sâu bò chậm, nhưng hãy thử hình khác."},{id:"boy",img:"act_13",why:"Bạn nhỏ đang ngồi yên."}]}
 ]});

ST.push({
 id:14,
 pages:[72,73],
 title:"Chế độ ăn khác nhau",
 en:"Different diets",
 role:"Chuyên gia Chế độ ăn · Diet Detective",
 img:"nat_15",
 mission:"So sánh chế độ ăn của động vật và con người, đoán điều gì xảy ra khi sư tử đuổi bắt ngựa vằn.",
 vocab:[{en:"giraffe",vi:"hươu cao cổ",img:"nat_15"},{en:"leaves",vi:"lá cây",img:"nat_07"},{en:"zebra",vi:"ngựa vằn",img:"id_07"},{en:"lion",vi:"sư tử",img:"nat_16"},{en:"plants",vi:"thực vật",img:"anat_01"},{en:"meal",vi:"bữa ăn",img:"nat_01"},{en:"diet",vi:"chế độ ăn",img:"nat_00"}],
 reward:["nat_15","nat_16","id_07"],
 can:[["I know different animals have different diets.","Em biết mỗi loài ăn khác nhau."],["I can predict what happens next.","Em dự đoán được điều xảy ra tiếp theo."],["I can name plants I eat.","Em kể được các thực vật em ăn."]],
 helper:[["tr.72 câu 1–2","Khoanh quá trình sống, hươu ăn gì, vì sao ngựa vằn chạy, dự đoán."],["tr.73 câu 3a","Kể tên các thực vật em ăn."],["tr.73 câu 3b","Vẽ hai bữa ăn em thích và ghi nhãn trên đĩa."]],
 tasks:[
  {type:"choice",cmd:"circle",pg:72,ref:"Câu 1a",q:"Circle the life process shown in the picture.",vi:"Khoanh quá trình sống được thể hiện trong hình.",fig:"nat_15",hint:"Hươu đang ăn lá.",opts:[{id:"nutrition",t:"nutrition"},{id:"growth",t:"growth"},{id:"walking",t:"walking"}],ans:"nutrition",shuffle:false},
  {type:"choice",cmd:"write",pg:72,ref:"Câu 1b",q:"What sort of food do giraffes eat?",vi:"Hươu cao cổ ăn loại thức ăn nào?",fig:"nat_15",opts:[{id:"l",t:"leaves",vi:"lá cây"},{id:"m",t:"meat",vi:"thịt"},{id:"f",t:"fish",vi:"cá"},{id:"n",t:"noodles",vi:"mì"}],ans:"l"},
  {type:"choice",cmd:"write",pg:72,ref:"Câu 2a",q:"The zebra is running away from the lion. Which life process is running?",vi:"Ngựa vằn đang chạy trốn sư tử. Chạy là quá trình sống nào?",figs:["id_07","nat_16"],opts:[{id:"movement",t:"movement"},{id:"growth",t:"growth"},{id:"nutrition",t:"nutrition"}],ans:"movement",shuffle:false},
  {type:"choice",cmd:"suggest",pg:72,ref:"Câu 2b",q:"Suggest why the zebra is running away.",vi:"Đoán xem vì sao ngựa vằn chạy trốn.",kw:[["suggest","đoán / gợi ý"]],hint:"Sư tử là động vật ăn thịt.",figs:["id_07","nat_16"],opts:[{id:"a",t:"It is scared the lion will eat it.",vi:"Nó sợ sư tử ăn thịt mình."},{id:"b",t:"It wants to go swimming.",vi:"Nó muốn đi bơi."},{id:"c",t:"It is cold.",vi:"Nó bị lạnh."}],ans:"a"},
  {type:"choice",cmd:"predict",pg:72,ref:"Câu 2c",q:"Predict what will happen if the lion catches the zebra.",vi:"Dự đoán điều gì sẽ xảy ra nếu sư tử bắt được ngựa vằn.",kw:[["predict","dự đoán"]],hint:"Sư tử ăn thịt.",figs:["id_07","nat_16"],opts:[{id:"a",t:"The lion will eat the zebra.",vi:"Sư tử sẽ ăn ngựa vằn."},{id:"b",t:"The zebra will eat the lion.",vi:"Ngựa vằn sẽ ăn sư tử."},{id:"c",t:"They will play together.",vi:"Chúng sẽ chơi cùng nhau."}],ans:"a"},
  {type:"choice",cmd:["name","list"],pg:73,ref:"Câu 3a",q:"What plants do you eat in your diet? Name some.",vi:"Trong chế độ ăn của em có những thực vật nào? Kể tên vài loại.",hint:"Gạo, chuối, táo, bông cải đều đến từ thực vật.",fig:"nat_01",multi:true,subset:3,opts:[{id:"a",t:"rice",vi:"gạo"},{id:"b",t:"banana",vi:"chuối"},{id:"c",t:"apple",vi:"táo"},{id:"d",t:"broccoli",vi:"bông cải"},{id:"e",t:"chicken",vi:"thịt gà"},{id:"f",t:"milk",vi:"sữa"}],ans:["a","b","c","d"],write:"rice, banana, apple, broccoli"},
  {type:"cloze",cmd:["draw","label"],pg:73,ref:"Câu 3b",q:"Draw two different meals that you like to eat. Draw label lines and write words to show what is on each plate.",vi:"Vẽ hai bữa ăn khác nhau em thích. Ghi nhãn thức ăn trên mỗi đĩa.",hint:"Mỗi đĩa chọn 2 món. Hai đĩa phải khác nhau.",tpl:"<p><b>Plate 1:</b> {a} + {b}</p><p><b>Plate 2:</b> {c} + {d}</p>",slots:{a:{ans:[]},b:{ans:[]},c:{ans:[]},d:{ans:[]}},groups:[{slots:["a","b"],pool:["rice","vegetables","fish","chicken","egg","fruit","bread","tofu"]},{slots:["c","d"],pool:["rice","vegetables","fish","chicken","egg","fruit","bread","tofu"]}],bank:["rice","vegetables","fish","chicken","egg","fruit","bread","tofu"],reuse:true,autoText:"tuỳ em chọn",validate(v){const s1=[v.a,v.b].sort().join(),s2=[v.c,v.d].sort().join();return s1===s2?{bad:['c','d'],msg:'Hai bữa ăn phải khác nhau nhé!'}:true;}}
 ]});

ST.push({
 id:15,
 pages:[74,75],
 title:"Tôi đã học được gì?",
 en:"What have I learned?",
 role:"Thử thách tổng kết · Final Expert Check",
 img:"g_04",
 mission:"Ôn lại toàn bộ chủ đề Animals: bộ phận, xương sống, 5 nhóm, di chuyển, lớn lên và dinh dưỡng.",
 vocab:[{en:"vertebrate",vi:"có xương sống",img:"anat_03"},{en:"mammal",vi:"có vú",img:"g_06"},{en:"bird",vi:"chim",img:"tex_01"},{en:"fish",vi:"cá",img:"tex_02"},{en:"reptile",vi:"bò sát",img:"g_29"},{en:"amphibian",vi:"lưỡng cư",img:"g_28"},{en:"life cycle",vi:"vòng đời",img:"swamp_11"}],
 reward:["g_04","g_06","g_28"],
 can:[["I can list parts of a crocodile.","Em kể được các bộ phận của cá sấu."],["I can group vertebrates into five groups.","Em chia được 5 nhóm động vật có xương sống."],["I understand movement, growth and nutrition.","Em hiểu movement, growth, nutrition."]],
 helper:[["tr.74 câu 1–3","Liệt kê bộ phận cá sấu, điền backbone/vertebrae, viết 5 nhóm."],["tr.74 câu 4","Nêu hai cách động vật di chuyển."],["tr.75 câu 5–6","Vẽ chim non và chim lớn, 4 giai đoạn của ếch, gấu trúc và sư tử ăn gì."]],
 tasks:[
  {type:"choice",cmd:["list","name"],pg:74,ref:"Câu 1",q:"I can list three parts of a crocodile.",vi:"Em có thể liệt kê ba bộ phận của cá sấu.",fig:"swamp_00",multi:true,subset:3,hint:"Cá sấu có vảy, răng, mắt, đuôi. Không có cánh hay lông.",opts:[{id:"a",t:"scales"},{id:"b",t:"teeth"},{id:"c",t:"eyes"},{id:"d",t:"tail"},{id:"e",t:"wings"},{id:"f",t:"feathers"}],ans:["a","b","c","d"],write:"scales, teeth, eyes (tail, mouth, legs)"},
  {type:"cloze",cmd:"complete",pg:74,ref:"Câu 2",q:"I know that some animals are vertebrates because they have a ______ made of little bones called ______.",vi:"Em biết một số động vật là động vật có xương sống vì chúng có ______ làm từ các xương nhỏ gọi là ______.",hint:"Xương sống = backbone; các xương nhỏ = vertebrae.",tpl:"…because they have a {a} made of little bones called {b}.",slots:{a:{ans:["backbone","spine"]},b:{ans:["vertebrae"]}},bank:["backbone","vertebrae","skull","shell"]},
  {type:"place",cmd:"sort",pg:74,ref:"Câu 3",q:"I can group vertebrates into five groups. I can list the groups.",vi:"Em có thể chia động vật có xương sống thành năm nhóm và liệt kê các nhóm.",hint:"Chim có lông vũ; cá có vây; bò sát có vảy khô; lưỡng cư có da ẩm; động vật có vú có lông mao.",write:"mammals, birds, fish, reptiles, amphibians",slots:[{id:"m",t:"mammals",vi:"có vú"},{id:"b",t:"birds",vi:"chim"},{id:"f",t:"fish",vi:"cá"},{id:"r",t:"reptiles",vi:"bò sát"},{id:"a",t:"amphibians",vi:"lưỡng cư"}],cards:[{id:"a1",img:"ph_tiger"},{id:"a2",img:"ph_rabbit"},{id:"b1",img:"id_10"},{id:"b2",img:"id_11"},{id:"f1",img:"ph_carp"},{id:"f2",img:"ph_goldfish"},{id:"r1",img:"ph_croc"},{id:"r2",img:"ph_cobra"},{id:"x1",img:"ph_frog1"},{id:"x2",img:"ph_frog2"}],map:{a1:"m",a2:"m",b1:"b",b2:"b",f1:"f",f2:"f",r1:"r",r2:"r",x1:"a",x2:"a"}},
  {type:"choice",cmd:"name",pg:74,ref:"Câu 4",q:"I can name two ways in which animals move.",vi:"Em có thể kể hai cách động vật di chuyển.",multi:true,pick:2,opts:[{id:"a",t:"run"},{id:"b",t:"fly"},{id:"c",t:"swim"},{id:"d",t:"eat"},{id:"e",t:"grow"}],hint:"Eat và grow không phải cách di chuyển.",ans:["a","b","c"],subset:2,write:"run, fly, swim, jump, walk..."},
  {type:"drawpick",cmd:"draw",pg:75,ref:"Câu 5a",q:"I can draw a baby bird and an adult bird.",vi:"Em có thể vẽ một chim con và một chim lớn.",hint:"Chim con nhỏ hơn, lông tơ. Chim lớn to hơn.",boxes:[{id:"b",title:"baby",label:"baby bird",accept:id=>['chick','duckling'].includes(id)},{id:"a",title:"adult",label:"adult bird",accept:id=>['hen','duck','parrot'].includes(id)}],bank:[{id:"chick",img:"egg_04"},{id:"duckling",img:"egg_08"},{id:"hen",img:"g_17"},{id:"duck",img:"g_19"},{id:"parrot",img:"id_11"},{id:"cat",img:"act_18",why:"Mèo không phải chim."}]},
  {type:"cloze",cmd:"name",pg:75,ref:"Câu 5b",q:"I can name four stages in a frog life cycle.",vi:"Em có thể kể tên bốn giai đoạn trong vòng đời của ếch.",hint:"Eggs, tadpole, baby frog, adult frog.",figs:["swamp_12","swamp_10","frog_baby","swamp_09"],tpl:"{a}, {b}, {c}, {d}",slots:{a:{ans:[]},b:{ans:[]},c:{ans:[]},d:{ans:[]}},groups:[{slots:["a","b","c","d"],pool:["eggs","tadpole","baby frog","adult"]}],bank:["eggs","tadpole","baby frog","adult","caterpillar"],autoText:"eggs, tadpole, baby frog, adult"},
  {type:"cloze",cmd:"complete",pg:75,ref:"Câu 6",q:"I know this because giant pandas eat ______ and lions eat ______.",vi:"Em biết điều này vì gấu trúc ăn ______ còn sư tử ăn ______.",figs:["nat_12","nat_16"],hint:"Gấu trúc ăn tre (thực vật). Sư tử ăn thịt (động vật).",tpl:"Giant pandas eat {a} and lions eat {b}.",slots:{a:{ans:["bamboo"]},b:{ans:["meat","animals","zebras"]}},bank:["bamboo","meat","grass","fish"]}
 ]});
