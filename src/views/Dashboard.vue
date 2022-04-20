
<template>
<v-app id='app' :style="{margin :'-12px 0px 0px 0px','background-color' : '#E9ECEF'}" >
  
 <v-container fluid :grid-list-md="!$vuetify.breakpoint.xs">
    <v-layout wrap row>



     <v-flex xs12 sm6 md3 class="pb-2">
  <v-card>
          <v-container pa-1>
            <v-layout row>
              <v-flex xs7>
                <v-card-title primary-title>
                  <div>
                    <div class="grey--text">활동</div>
                    <h3 class="headline">0/40</h3>
                  </div>
                </v-card-title>
              </v-flex>
              <v-flex xs5>
                <v-card-title primary-title>
                  <v-avatar>
                    <v-icon size="40" color="success">mdi-phone</v-icon>
                  </v-avatar>
                </v-card-title>
              </v-flex>
            </v-layout>
            <v-divider light></v-divider>
            <v-card-actions class="pa-2">
              <v-icon small color="primary">mdi-update</v-icon>
              <span class="grey--text caption font-italic">&nbsp;5분전</span>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-container>
        </v-card>
      </v-flex>








        
      <v-flex xs12 sm6 md3 class="pb-2">
  <v-card>
          <v-container pa-1>
            <v-layout row>
              <v-flex xs7>
                <v-card-title primary-title>
                  <div>
                    <div class="grey--text">마진</div>
                    <h3 class="headline">9,805,000</h3>
                  </div>
                </v-card-title>
              </v-flex>
              <v-flex xs5>
                <v-card-title primary-title>
                  <v-avatar>
                    <v-icon size="40" color="yellow darken-2">mdi-cash-multiple</v-icon>
                  </v-avatar>
                </v-card-title>
              </v-flex>
            </v-layout>
            <v-divider light></v-divider>
            <v-card-actions class="pa-2">
              <v-icon small color="primary">mdi-update</v-icon>
              <span class="grey--text caption font-italic">&nbsp;5분전</span>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-container>
        </v-card>
      </v-flex>


           <v-flex xs12 sm6 md3 class="pb-2">
  <v-card>
          <v-container pa-1>
            <v-layout row>
              <v-flex xs7>
                <v-card-title primary-title>
                  <div>
                    <div class="grey--text">방문객</div>
                    <h3 class="headline">40</h3>
                  </div>
                </v-card-title>
              </v-flex>
              <v-flex xs5>
                <v-card-title primary-title>
                  <v-avatar>
                    <v-icon size="40" color="primary">mdi-account</v-icon>
                  </v-avatar>
                </v-card-title>
              </v-flex>
            </v-layout>
            <v-divider light></v-divider>
            <v-card-actions class="pa-2">
              <v-icon small color="primary">mdi-update</v-icon>
              <span class="grey--text caption font-italic">&nbsp;5분전</span>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-container>
        </v-card>
      </v-flex>



           <v-flex xs12 sm6 md3 class="pb-2">
  <v-card>
          <v-container pa-1>
            <v-layout row>
              <v-flex xs7>
                <v-card-title primary-title>
                  <div>
                    <div class="grey--text">등록고객</div>
                    <h3 class="headline">4,731</h3>
                  </div>
                </v-card-title>
              </v-flex>
              <v-flex xs5>
                <v-card-title primary-title>
                  <v-avatar>
                    <v-icon size="40" color="blue lighten-1">mdi-human-capacity-increase</v-icon>
                  </v-avatar>
                </v-card-title>
              </v-flex>
            </v-layout>
            <v-divider light></v-divider>
            <v-card-actions class="pa-2">
              <v-icon small color="primary">mdi-update</v-icon>
              <span class="grey--text caption font-italic">&nbsp;5분전</span>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-container>
        </v-card>
      </v-flex>


<v-flex xs12 sm4 class="pb-2">
        <v-card>
          <v-card-title primary-title>
            <span class="grey--text">시간별 활동 현황</span>
          </v-card-title>
          <v-card-text>
            <trend
              :data="[0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 0, 0, 0, 0, 0]"
              :gradient="['#6fa8dc', '#42b983', '#2c3e50']"
              auto-draw
              smooth>
            </trend>
          </v-card-text>
        </v-card>
      </v-flex>

<v-flex xs12 sm4 class="pb-2">
        <v-card>
          <v-card-title primary-title>
            <span class="grey--text">시간별 방문객 현황</span>
          </v-card-title>
          <v-card-text>
            <trend
              :data="[2, 2, 8, 12, 9, 10, 3, 5, 0, 0, 1, 8, 2, 9, 10]"
              :gradient="['#6fa8dc', '#42b983', '#2c3e50']"
              auto-draw
              smooth>
            </trend>
          </v-card-text>
        </v-card>
      </v-flex>



<v-flex xs12 sm4 class="pb-2">
        <v-card>
          <v-card-title primary-title>
            <span class="grey--text">일별 마진 현황</span>
          </v-card-title>
          <v-card-text>
            <trend
              :data="[10, 2, 6, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 8]"
              :gradient="['#6fa8dc', '#42b983', '#2c3e50']"
              auto-draw
              smooth>
            </trend>
          </v-card-text>
        </v-card>
      </v-flex>

      <v-flex xs12 sm6 class="pb-2">
        <v-card height="290px" :color="`#${i3}aafff`">
          
        </v-card>
      </v-flex>
      
      <v-flex xs12 sm6 class="pb-2">
        <v-card height="290px" :color="`#${i3}aafff`">
          
        </v-card>
      </v-flex>



    </v-layout>
  </v-container>
</v-app>
</template>

<script>
export default {

}
</script>

<style>

</style>