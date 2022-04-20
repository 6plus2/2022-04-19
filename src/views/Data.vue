<template>

<v-app id='app' >
  
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
      <v-spacer></v-spacer>
      


<!-- 다이얼로그 시작 -->
    <v-dialog
      v-model="dialog"
      width="1200"
    >

      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          이력<v-spacer></v-spacer>
          


           <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
              <v-btn
             icon
             v-bind="attrs"
             v-on="on"
             >
               <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
      </template>

  <v-list>
    <v-list-item-group>
      <v-list-item v-for="(item, index) in additem" :key="index"  @click="menuActionClick(item.action)">
              <v-list-item-title >{{ item.title }}</v-list-item-title>
      </v-list-item>

      </v-list-item-group>
</v-list>
             </v-menu>
        </v-card-title>


<!-- 내부 카드시작 -->
        <v-card-text>
      <v-dialog
      v-model="dialog2"
      hide-overlay
      width="600"
     
    >
         <v-card>
        <v-card-title class="text-h5 grey lighten-2">
                          <v-btn
              icon
              @click="dialog2 = false">
            <v-icon>mdi-close</v-icon>
            </v-btn>
             상세
        </v-card-title>
        <v-card-text>
            <v-menu
        v-model="menu3"
        :close-on-content-click="false"
        :nudge-right="40"
        transition="scale-transition"
        offset-y
        min-width="auto"
      >
        <template v-slot:activator="{ on, attrs }">
          방문예정일
          <v-text-field
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
        <v-card-text>
       방문유형
       <v-combobox          
       v-model="select"
       :items="combo"
       >
       </v-combobox>


        </v-card-text>

                <v-card-text>
        내용
        <v-text-field 

        v-model="contents"
        single-line
        hide-details
      ></v-text-field>

        </v-card-text>


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




<!-- 내부 데이터테이블 시작 -->
        <v-data-table 
      :headers="Bheaders"
      :items="Bitems"
      :sort-by="['day','day']"
      :sort-desc="[false, true]"
      multi-sort
      :search="search"
      @click:row="me2"
      hide-default-footer
    >
    </v-data-table>
    <!-- 내부 데이터테이블 종료 -->
        </v-card-text>
<!-- 내부 카드종료 -->

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
           닫기
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
<!-- 다이얼로그 끝 -->








      <v-text-field 
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
        
      ></v-text-field>
    </v-card-title>
    

    <v-data-table 
      :headers="headers"
      :items="items"
      :sort-desc="[false, true]"
      multi-sort
      :search="search"
      @click:row="me"
      
    >

    </v-data-table>
    </v-card>
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
      contents :'',
      select:'',
        dialog: false,
         dialog2: false,


        serveid: '',
        servename: '',
        servectn: '',

        search: '',

      editedIndex: -1,
        headers: [
         { text: '최종컨택일', align: 'start',sortable: true,value: 'day'},
         { text: '통신사',sortable: true, value: 'agency' , show : false},
         { text: '최종담당자',sortable: true, value: 'agent' },
         { text: '고객명',sortable: true, value: 'name' },
         { text: '전화번호',sortable: true, value: 'number' },
         { text: '생년월일',sortable: true, value: 'birthday' },
         { text: '단말기',sortable: true, value: 'device' },
         { text: '개통등록일',sortable: true, value: 'create' },
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
        combo:[
          '[OB]기기변경','[OB]슈퍼체인지','[OB]요금절감','[OB]사전예약','[OB]실패'
        ],

        additem: [
        { title: 'OB추가', action: "ob" },
        { title: '방문객',action: "ob1"  },
         { title: '정보수정신고' ,action: "ob2" },
      ],

    Bheaders: [
         { text: '컨텍일', align: 'start',sortable: true,value: 'day' },
         { text: '담당자',sortable: true, value: 'agent' },
         { text: '고객명',sortable: true, value: 'name' },
         { text: '전화번호',sortable: true, value: 'number' },
         { text: '타입',sortable: true, value: 'type' },
         { text: '메모',sortable: true, value: 'memo' },
        ],
        Bitems : [],



      }
    },
  async mounted () {
    //console.log(this.$firebase)
      //  this.$firebase.database().ref().child('KT').on('value', (sn) => {
        //console.log(sn.val())
        //const data = sn.val()
        //this.items = data
        //this.items.push(sn.val())
        //console.log(this.items)
        
   //   })

           const sn = await this.$firebase.firestore().collection('costomer').get()
       /*  sn.docs.forEach(v =>{
          console.log(v.data())
      })*/
       this.items = sn.docs.map(v => {
        const item = v.data()
        return {
          id: v.id,
          name: item.name,
          birthday : item.birthday,
          number : item.number,
          day : item.day,
          create : item.create,
          agency : item.agency,
          agent : item.agent,
          device : item.device
          
        }
       })
       console.log(this.items)
       
  },

   methods: {

        //this.$firebase.database().ref().child('KT').child('servicenumber').child('565651882').on('value', (sn) => {
        //this.items.push(sn.val())
       async me (event, { item }){
          //alert(item)
           //this.editedIndex = this.items.indexOf(item)
           //this.editedItem = Object.assign({}, item)
          this.editedIndex = this.items.indexOf(item)
          
          this.dialog = true


          console.log(this.items[this.editedIndex].name)
          console.log(this.items[this.editedIndex].number)
          console.log(this.items[this.editedIndex].birthday)
          console.log(this.items[this.editedIndex].create)
          console.log(this.items[this.editedIndex].id)


          this.serveid  = this.items[this.editedIndex].id
          this.servectn = this.items[this.editedIndex].number
          this.servename = this.items[this.editedIndex].name

         // const sn2 = await  this.$firebase.firestore().collection('history').where(ID, "==", this.items[this.editedIndex].id).get()
         const sn2 = await  this.$firebase.firestore().collection('history').where("ID", "==", this.items[this.editedIndex].id).get()
        this.Bitems = sn2.docs.map(v => {
        const item2 = v.data()
        return {
          id: v.id,
          name: item2.name,
          agent : item2.agent,
          day : item2.day,
          type : item2.type,
          number : item2.number,
          memo : item2.memo
        }
       })

       //console.log(this.items2)

         // alert(this.items.name)
        },

        me2 (event, { item }){
          //alert(item)
           //this.editedIndex = this.items.indexOf(item)
           //this.editedItem = Object.assign({}, item)
          //this.dialog2 = true
          //alert(this.editedIndex)
          //alert(this.editedItem)
        },

        async save(){
          console.log(this.serveid)
          alert(this.contents)
          const sn2 = await  this.$firebase.firestore().collection('history').add({
        ID:this.serveid,
        agent:"정연준",
        day: this.datenow,
        memo: this.contents,
        name: this.servename,
        number: this.servectn,
        type: this.select
          })
          this.serveid = ''
          this.servename = ''
          this.servectn = ''
          this.contents = ''
          this.select = ''

          this.dialog2 = false
        },



         menuActionClick(action){
          if(action === "ob"){
          this.dialog2 = true
          }
           else if (action === "ob2") {

          }

           

        },
      

  }
}
</script>

<style>
</style>