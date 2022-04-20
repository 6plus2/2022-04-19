<template>
    <v-container fill-height style="max-width:450px;">
        <v-layout align-center row wrap>
                <v-flex xs12>
                    <v-card>
                        <v-toolbar flat>
                             <v-toolbar-title>로그인</v-toolbar-title>
                        </v-toolbar>
                        <div class="pa-3">
                         <v-text-field
                            v-model="email"
                            type="email"
                            label="이메일을 입력하세요"></v-text-field>
                            <v-text-field
                            v-model="password"
                            type="password"
                            label="비밀번호를 입력하세요"></v-text-field>
                            <v-btn 
                            type="submit"
                            color="primary"
                            depressed
                            block
                            large
                            v-on:click="login"
                            >
                          
                            로그인
                            </v-btn>
                            
                            </div>
                        </v-card>
                </v-flex>
            </v-layout>
        </v-container>
</template>

<script>
//@click="hidden = !hidden"
import firebase from 'firebase'
import store from '@/store/index.js' 

  export default {
    data: () => ( {
        state:'인증되었습니다',
        email: '',
        password: ''
    }),

    methods:{

        login() {
          // alert(this.$store.state.accessToken)

        firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        .then(data => {
            store.commit("statechange",this.state) //토큰상태변경
            alert(this.$store.state.accessToken)
             this.$router.push({name: 'Dashboard'})
          })
          .catch(err => {
          console.log("not successful")
          this.error = err.message;
          alert(err.message);
          });
      

        },

        ccc(){
          this.$router.push({name: 'Dashboard'})
        },

            }
            



  
    }
  


</script>

<style>

</style>