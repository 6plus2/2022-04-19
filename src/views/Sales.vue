<template>

<v-app id='app'>
  
  <v-card >
    <v-card-title>
        <v-row>
 <v-col
      cols="12"
      sm="6"
      md="4"
    >
        <v-menu
        v-model="menu1"
        :close-on-content-click="false"
        :nudge-right="40"
        transition="scale-transition"
        offset-y
        min-width="auto"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="date1"
            label="시작일"
          prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="date1"
          @input="menu1 = false"
        ></v-date-picker>
      </v-menu>
    </v-col>

     <v-col
      cols="12"
      sm="6"
      md="4"
    >
      <v-menu
        v-model="menu2"
        :close-on-content-click="false"
        :nudge-right="40"
        transition="scale-transition"
        offset-y
        min-width="auto"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="date2"
            label="종료일"
            
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="date2"
          @input="menu2 = false"
        ></v-date-picker>
      </v-menu>
    </v-col>
</v-row>
      <!--<v-btn icon @click="read"><v-icon>mdi-numeric</v-icon></v-btn> -->

    
        <v-select
        v-model="select"
       :items="combo"
          label="개통점"
          clearable
            :style="{width :'20px',fontWeight:'bold'}"
        ></v-select>

      <v-spacer></v-spacer>

      <v-text-field 
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
         :style="{'margin-top':'-18px'}"
      ></v-text-field>

        <v-btn
            color="primary"
            text
            :style="{'margin-top':'-30px'}"
             @click="add"
          >
           추가
          </v-btn>
          
        <v-btn
            color="primary"
            text
            :style="{'margin-top':'-30px'}"
             @click="details"
          >
           자세히
          </v-btn>
    </v-card-title>

    <v-data-table 
      :headers="headers"
      :items="items"
      :sort-desc="[false, true]"
      multi-sort
      :search="search"
      @click:row="me"
      hide-default-footer
   
  >
    </v-data-table>

    </v-card>



<!-- 내부 카드시작 -->
        <v-card-text >
      <v-dialog
      
      v-model="dialog2"
      hide-overlay
      width="900"
    >
    
         <v-card > 
        <v-card-title class="text-h5 grey lighten-2">
                          <v-btn
              icon
              @click="dialog2 = false">
            <v-icon>mdi-close</v-icon>
            </v-btn>
             판매일보
        </v-card-title>



<div  :style="{'padding' : '40px' , 'display' : 'block'}">

             <v-row
      justify="center" 

      >
            <v-col       
      cols="auto">

        <v-card-text>
            <v-menu
        v-model="menu3"
        :close-on-content-click="false"
        :nudge-right="40"
        transition="scale-transition"
        offset-y
        min-width="auto"
      >
        <template v-slot:activator="{ on, attrs }"   >
            




          <v-text-field
            :style="{'margin-top':'4px',width :'150px'}"
         
            v-model="date3"
          prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
 
        <v-date-picker
        
          v-model="date3"
          @input="menu3 = false"
        ></v-date-picker>
      </v-menu>


        </v-card-text>
            </v-col>





        <v-col       
      cols="auto">
        <v-card-text>
       유/무선
       <v-select
       
              :style="{'margin-top':'-18px',width :'100px'}"

       :items="combo2"
       >
       </v-select>
        </v-card-text>
        </v-col>
        <v-col cols="auto">
                     <v-card-text>
       개통점
       <v-select
       
              :style="{'margin-top':'-18px',width :'170px'}"

       :items="combo3"
       >
       </v-select>
        </v-card-text>
</v-col>


     <v-col  cols="auto">
                <v-card-text>
       담당자
       <v-select
       
              :style="{'margin-top':'-18px',width :'150px'}"

       :items="combo5"
       >
       </v-select>
        </v-card-text>
      </v-col>

        </v-row>








          <v-row
          :style="{'margin-top':'-30px' , }"
      justify="center" 
      >
      
      
      <v-col  cols="auto">
                <v-card-text>
       개통유형
       <v-select
       
              :style="{'margin-top':'-18px',width :'150px'}"

       :items="combo4"
       >
       </v-select>
        </v-card-text>

      </v-col>
         


         <v-col  cols="auto">
        <v-card-text>
       개통요금제
       <v-select
       clearable
              :style="{'margin-top':'-18px',width :'250px'}"
  
       :items="combo7"
       >
       </v-select>
        </v-card-text>
         </v-col>

                  <v-col  cols="auto">
        <v-card-text>
       변경요금제
       <v-select
       clearable
              :style="{'margin-top':'-18px',width :'250px'}"
  
       :items="combo7"
       >
       </v-select>
        </v-card-text>
         </v-col>
                 </v-row>


      <v-row  justify="center"  :style="{'margin-top':'-30px'}">

       <v-col  cols="auto">
        <v-card-text>
       요금제유지일
       <v-select
 
              :style="{'margin-top':'-18px',width :'150px'}"

       :items="combo9"
       >
       </v-select>
        </v-card-text>
      </v-col>

          <v-col  cols="auto">
        <v-card-text >
       약정
       <v-select
              :style="{'margin-top':'-18px',width :'150px'}"
       :items="combo8"
       >
       </v-select>
        </v-card-text>
      </v-col>


          <v-col  cols="auto">
        <v-card-text >
       클럽
       <v-select
              :style="{'margin-top':'-18px',width :'150px'}"
       :items="combo10"
       >
       </v-select>
        </v-card-text>
      </v-col>

          <v-col  cols="auto">
        <v-card-text>
       단말기
       <v-select
 
              :style="{'margin-top':'-18px',width :'150px'}"

       :items="combo6"
       >
       </v-select>
        </v-card-text>
      </v-col>



      </v-row>

  <v-row  justify="center"  :style="{'margin-top':'-30px'}" >
 <v-col  cols="auto">
           <v-card-text>
        고객명
        <v-text-field 
               :style="{'margin-top':'-18px',width :'150px'}"
        v-model="name"
        single-line
        hide-details
      ></v-text-field>
        </v-card-text>
 </v-col>

 <v-col  cols="auto">
           <v-card-text>
        전화번호
        <v-text-field 
               :style="{'margin-top':'-18px',width :'150px'}"
               v-model="number"
        single-line
        hide-details
      ></v-text-field>
        </v-card-text>
 </v-col>

 <v-col  cols="auto">
           <v-card-text>
        생년월일
        <v-text-field 
               :style="{'margin-top':'-18px',width :'150px'}"
        single-line
        hide-details
      ></v-text-field>
        </v-card-text>
 </v-col>


  <v-col  cols="auto">
           <v-card-text>
        중고폰
        <v-text-field 
               :style="{'margin-top':'-18px',width :'150px'}"
        single-line
        hide-details
      ></v-text-field>
        </v-card-text>
 </v-col>
      
 </v-row>
 












  <v-row  justify="center"  :style="{'margin-top':'-30px'}" >
  <v-col  cols="auto">
             <v-card-text>
        대납
        <v-text-field 
                        :style="{'margin-top':'-18px',width :'100px'}"
        v-model="aa"
        single-line
        hide-details
      ></v-text-field>

        </v-card-text>
  </v-col>

  <v-col  cols="auto">
           <v-card-text>
        송금
        <v-text-field 
                         :style="{'margin-top':'-18px',width :'100px'}"

        single-line
        hide-details
      ></v-text-field>

        </v-card-text>
  </v-col>
    <v-col  cols="auto">
           <v-card-text>
        선납
        <v-text-field 
                        :style="{'margin-top':'-18px',width :'100px'}"
 
        single-line
        hide-details
      ></v-text-field>

        </v-card-text>
    </v-col>

       <v-col  cols="auto">
           <v-card-text>
        선납횟수
       <v-select
              :style="{'margin-top':'-18px',width :'150px'}"
       :items="combo11"
       >
       </v-select>
           </v-card-text>
    </v-col>
  <v-col  cols="auto">
        <v-card-text>
        기타수입
        <v-text-field 
                     :style="{'margin-top':'-18px',width :'100px'}"
      
        single-line
        hide-details
      ></v-text-field>

        </v-card-text>
  </v-col>
  </v-row>
</div>


  


        <v-divider></v-divider>
        
        <v-card-actions>
                    <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="save"
          >
           제출
          </v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>
        </v-card-text>











</v-app>
</template>



<script>

export default {
  
data () {
      return {

      date1: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      date2: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      date3: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),

     datenow: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),

      modal: false,
      menu1: false,
      menu2: false,
      menu3: false,

      firename : '',
      dialog2: false,
      contents :'',
      select:'',


      name:'',
      number:'',


      aa:'',




        dialog: false,

        search: '',
            combo:[
          '건대랜드마크점','자양점','성수점'
        ],


             combo2:[
          '유선','무선'
        ],

             combo3:[
         '건대랜드마크점','자양점','성수점'
        ],

             combo4:[
          '신규가입','번호이동','우수기변','전환기변'
        ],

             combo5:[
          '정연준','윤지원','이준혁','김민성','문한결'
        ],

             combo6:[
          'AIP13P-128','SM-S901','SM-S908','SM-A326'
        ],

      combo7:[
          '슈퍼플랜 스페셜 초이스','슈퍼플랜 베이직 초이스','5G 심플','5G 슬림','5G 세이브'
        ],

      combo8:[
          '선택약정','심플코스'
        ],
    combo9:[
          '124일','186일'
        ],

            combo10:[
          '슈퍼체인지','그린폰','삼성특별보상'
        ],
            combo11:[
          '1','2','3','4','5','6','7','8','9','10','11','12'
        ],



      editedIndex: -1,
        headers: [
        { text: '개통일', align: 'start',sortable: true,value: 'day'},//0
        { text: '유/무선',sortable: true, value: 'kind'},//1
        { text: '개통점',sortable: true, value: 'spot' },//2
        { text: '담당자',sortable: true, value: 'agent'},//3
        { text: '고객명',sortable: true, value: 'name' },//4
        { text: '전화번호',sortable: true, value: 'number' },//5
        { text: '생년월일',sortable: true, value: 'birthday' },//6
        { text: '개통유형',sortable: true, value: 'type'},//7
        { text: '개통단말기',sortable: true, value: 'device'},//8
        { text: '할부',sortable: true, value: 'monthlyplan', align: '', show: true},//9
        { text: '할부원금',sortable: true, value: 'price',align: '', show: true},//10
        { text: '약정',sortable: true, value: 'plan'},//11
        { text: '개통요금제',sortable: true, value: 'payplan1'},//12
        { text: '변경요금제',sortable: true, value: 'payplan2',align: '', show: true },//13
        { text: '유지기간',sortable: true, value: 'retention',align: '', show: true },//14
        { text: '포인트',sortable: true, value: 'point' ,align: '', show: true },//15
        { text: '클럽',sortable: true, value: 'club' ,align: '', show: true},//16
        { text: '수수료',sortable: true, value: 'incentive' ,align: '', show: true},//17
        { text: '대납',sortable: true, value: 'payment',align: '', show: true},//18
        { text: '송금',sortable: true, value: 'remittance' ,align: '', show: true },//19
        { text: '은행',sortable: true, value: 'bank', align: '', show: true },//20
        { text: '계좌번호',sortable: true, value: 'bankaccount' ,align: '', show: true },//21
        { text: '예금주',sortable: true, value: 'accountname',align: '', show: true  },//22
        { text: '현금개통',sortable: true, value: 'cashpayment',align: '', show: true },//23
        { text: '선납',sortable: true, value: 'prepay' ,align: '', show: true },//24
        { text: '선납횟수',sortable: true, value: 'prepaynumber' ,align: '', show: true},//24
        { text: '기타수입',sortable: true, value: 'revenue' ,align: '', show: true },//25
        { text: '중고',sortable: true, value: 'secondhand' ,align: '', show: true },//26
        { text: '권리실행',sortable: true, value: 'change' ,align: '', show: true },//27
        { text: '보험가입',sortable: true, value: 'insurance' ,align: '', show: true},//28
        { text: '부가서비스',sortable: true, value: 'vas' ,align: '', show: true},//29
        { text: '제휴카드',sortable: true, value: 'card' ,align: '', show: true },//30
        { text: '미결업무',sortable: true, value: 'pending' },//31

        ],
        items : [
          /*
          {
            day : '2021-01-05',
            name : '윤지투',
            number : '010-9999-8013',
            birthday : '1995-02-01',
            create : '2022-01-30'
          }
          */
        ],
          Bitems : [
             

          ],







      }
    },
  async mounted () {

           const sn = await this.$firebase.firestore().collection('sales').get()

       this.items = sn.docs.map(v => {
        const item = v.data()
        return {
          id: v.id,
          day : item.day,
          kind : item.kind,
          spot : item.spot,
          agent : item.agent,
          name: item.name,
          number : item.number,
          birthday : item.birthday,
          type : item.type,
          device : item.device,
          monthlyplan: item.monthlyplan,
          price : item.price,
          plan : item.plan,
          payplan1 : item.payplan1,
          payplan2 : item.payplan2,
          retention : item.retention,
          point : item.point,
          club : item.club,
          incentive : item.incentive,
          payment : item.payment,
          remittance : item.remittance,
          bank : item.bank,
          bankaccount : item.bankaccount,
          accountname : item.accountname,
          cashpayment : item.cashpayment,
          prepay : item.prepay,
          prepaynumber : item.prepaynumber,
          revenue : item.revenue,
          secondhand : item.econdhand,
          change : item.change,
          insurance : item.insurance,
          vas : item.vas,
          card : item.card,
          pending : item.pending,
        }
       })
       console.log(this.items)
       
  },

   methods: {
     add(){
       this.dialog2 = true
     },

         async save(){

        if(this.name === '' || this.number === ''){
        alert("빈칸")
        }
        else if(this.name !== '' && this.number !== ''){

           alert("빈칸아님")
        const sn2 = await  this.$firebase.firestore().collection('costomer').where("name", "==", this.name).where("number", "==", this.number).get()
        this.Bitems = sn2.docs.map(v => {
        const item2 = v.data()
        return {
          id: v.id,
          name: item2.name,
          agent : item2.agent,
          day : item2.day,
          type : item2.type,
          number : item2.number,
          memo : item2.memo,
          
        }})
         if(this.Bitems[0] === undefined){
           alert("ID없음")
         }
         else if(this.Bitems[0] !== undefined){

            alert(this.Bitems[0].id)
         }


        }


       /*
          if(this.Bitems[0] === undefined){
              alert("ID없음")
          const sn2 = await  this.$firebase.firestore().collection('costomer').add
          ({
        name:"문한결"
          })
          


          }
          */
    this.Bitems = null
     },


      details(){
   
        if(this.headers[9].align !== ' d-none'){
            this.headers[9].align = ' d-none';
            this.headers[10].align = ' d-none';
            this.headers[13].align = ' d-none';
            this.headers[14].align = ' d-none';
            this.headers[15].align = ' d-none';
            this.headers[16].align = ' d-none';
            this.headers[17].align = ' d-none';
            this.headers[18].align = ' d-none';
            this.headers[19].align = ' d-none';
            this.headers[20].align = ' d-none';
            this.headers[21].align = ' d-none';
            this.headers[22].align = ' d-none';
            this.headers[23].align = ' d-none';
            this.headers[24].align = ' d-none';
            this.headers[25].align = ' d-none';
            this.headers[26].align = ' d-none';
            this.headers[27].align = ' d-none';
            this.headers[28].align = ' d-none';
            this.headers[29].align = ' d-none';
            this.headers[30].align = ' d-none';
            this.headers[31].align = ' d-none';
        }
        else if(this.headers[9].align == ' d-none'){
           this.headers[9].align = '';
           this.headers[10].align = '';
           this.headers[13].align = '';
           this.headers[14].align = '';
           this.headers[15].align = '';
           this.headers[16].align = '';
           this.headers[17].align = '';
           this.headers[18].align = '';
           this.headers[19].align = '';
           this.headers[20].align = '';
           this.headers[21].align = '';
           this.headers[22].align = '';
           this.headers[23].align = '';
           this.headers[24].align = '';
           this.headers[25].align = '';
           this.headers[26].align = '';
           this.headers[27].align = '';
           this.headers[28].align = '';
           this.headers[29].align = '';
           this.headers[30].align = '';
           this.headers[31].align = '';

        }

                  }
        
      
  }
}
</script>

<style>
.v-data-table {

  white-space : nowrap;
}
</style>