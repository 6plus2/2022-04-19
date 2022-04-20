<template>

<v-app id='app'>
  
  <v-card >
    <v-card-title>
     
      <!--<v-btn icon @click="read"><v-icon>mdi-numeric</v-icon></v-btn> -->
      <v-spacer></v-spacer>
      


<!-- 다이얼로그 시작 -->
    <v-dialog
      v-model="dialog"
      width="1200"
    >

      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          History   <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
        </v-card-title>


<!-- 내부 카드시작 -->
        <v-card-text>
      <v-dialog
      v-model="dialog2"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
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
          상세내용
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>




<!-- 내부 데이터테이블 시작 -->
        <v-data-table 
      :headers="Bheaders"
      :items="Bitems"
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
      hide-default-footer
    >

    </v-data-table>
    </v-card>
</v-app>
</template>



<script>

export default {
  
data () {
      return {
        dialog: false,
         dialog2: false,
        search: '',
      editedIndex: -1,
        headers: [
         { text: '최종컨택일', align: 'start',sortable: true,value: 'day'},
         { text: '통신사',sortable: true, value: 'agency' },
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
        
    Bheaders: [
         { text: '컨텍일', align: 'start',sortable: true,value: 'day'},
         { text: '담당자',sortable: true, value: 'agent' },
         { text: '고객명',sortable: true, value: 'name' },
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

           const sn = await this.$firebase.firestore().collection('costomer').where("agent", "==", "김민성").get()
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
        

         // const sn2 = await  this.$firebase.firestore().collection('history').where(ID, "==", this.items[this.editedIndex].id).get()
         const sn2 = await  this.$firebase.firestore().collection('history').where("ID", "==", this.items[this.editedIndex].id).get()
           this.Bitems = sn2.docs.map(v => {
        const item2 = v.data()
        return {
          id: v.id,
          name: item2.name,
          day : item2.day,
          type : item2.type,
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
        }
      

  }
}
</script>

<style>
</style>