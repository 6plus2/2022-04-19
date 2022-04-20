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
                            v-model="user.id"
                            :disabled="hidden = hidden"
                            label="휴대폰번호를 입력하세요"></v-text-field>
                            <v-text-field
                            v-model="user.password"
                            v-show="hidden"
                            label="인증번호를 입력하세요"></v-text-field>
                            <v-btn 
                            type="submit"
                            color="primary"
                            depressed
                            block
                            large
                            v-on:click="ccc"

                            >
                          
                             {{ hidden ? '로그인' : '인증번호보내기' }}
                            </v-btn>
                            
                            </div>
                        </v-card>
                </v-flex>
            </v-layout>
        </v-container>
</template>

<script>
//@click="hidden = !hidden"
                            
  export default {
    data: () => ({
        state:'인증되었습니다',
        hidden:false,
  user:{
    id:"",
    password:"",
  },
    }),

    methods:{
        ccc(){
            //this.$store.commit("statechange",this.state);
            if(this.user.id == '010-9999-8013'){
            this.hidden = true    
            if(this.user.password == '0000'){
            //hidden = !hidden      
            //this.$store.commit("hide") //토큰상태변경
            this.$store.commit("statechange",this.state) //토큰상태변경
            alert(this.$store.state.accessToken)

            this.$router.push({name: 'Dashboard'})
                }
            }
            else if(this.id !== '010-9999-8013'){
                alert('등록된 회원이 아닙니다.')
            }
        },

              login(){
                this.$http.post("/api/users/login",{
                  user: this.user,
                })
       
            }
            




    }
  }


</script>

<style>

</style>