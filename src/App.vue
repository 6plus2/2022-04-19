<template>
<v-app :style="{padding :'0px 40px 0px 40px','background-color' : '#E9ECEF'}">
<v-app-bar app color="white"> <!--retailandcompany-->
 <v-app-bar-nav-icon @click="drawer = !drawer"/>
 <v-spacer/>
</v-app-bar>

  <v-navigation-drawer v-model="drawer" dark app>
    <template #img="praps">
      <v-img :gradient="gradient" v-bind="praps"/>
    
    </template>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
             <v-img
               id= "rncimg"
               max-height="90"
               max-width="75"
               src="./assets/wrnc.png"
               justify="center"
               ></v-img>
          </v-list-item-title>
          <v-list-item-subtitle>
            <!--retailandcompany-->
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider/>

      <v-list
        dense
        nav
        
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          
          :to="item.to"
        >
          <v-list-item-icon>

            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content >
            
            <v-list-item-title :style="{fontWeight:'bold', fontSize:'12px',}">{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

        <v-main>
          <v-container fluid>
            <router-view/>
          </v-container>
        </v-main>

</v-app>
</template>
<script>

export default {
  name: 'App',
  
  components: {
    
  },
  data: () => ({
     drawer:false,
     gradient: 'rgba(0,0,0, 0.3),rgba(0,0,0, 0.1)',
          items: [
         // { title: 'Login', icon: 'mdi-lock', to : '/'},

// { title: 'Dashboard', icon: 'mdi-view-dashboard', to : '/Dashboard' },  
          { title: '대시보드', icon: 'mdi-monitor-dashboard', to : '/Dashboard' },//Dashboard
          { title: '전체고객', icon: 'mdi-table-account', to : '/data' },//All Data
          { title: '나의고객', icon: 'mdi-table-lock', to : '/mydata' },//My Data
          { title: '판매일보', icon: 'mdi-file-edit', to : '/Sales' },//Sales
          { title: '캘린더', icon: 'mdi-calendar-month', to : '/Calendar' },//Calendar
        ],

        right: null,
  }),
};

</script>

<style  lang="scss">
#rncimg{
		// 이미지가 로고와 텍스트 포함해서 어두워짐
		filter: brightness(70%);
    display:block; 
    margin:auto;
	}
</style>
