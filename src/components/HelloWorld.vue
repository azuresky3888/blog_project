<template>
  <v-app>
    <!-- ヘッダー -->
    <v-app-bar app clippedLeft flat dark color="dark">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Coffee break</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-menu offset-y>
          <template v-slot: activator="{ on }">
            <v-btn v-on="on" text><slot></slot></v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="programingItem in programingItems"
              :key="programingItem"
            >
              <v-list-item-content>
                <v-list-item-title>{{ programingItem }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-toolbar-items>
    </v-app-bar>

    <!-- サイドメニュー 左-->
    <v-navigation-drawer permanent>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Application
          </v-list-item-title>
          <v-list-item-subtitle>
            subtext
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list nav dense>
        <v-list-group
          v-for="nav_list in nav_lists"
          :key="nav_list.name"
          :prepend-icon="nav_list.icon"
          no-action
          :append-icon="nav_list.lists ? undefined : ''"
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>{{ nav_list.name }}</v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item v-for="list in nav_list.lists" :key="list">
            <v-list-item-content>
              <v-list-item-title>{{ list }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>

    <!-- メイン -->
    <v-main>
      <v-container fluid> </v-container>
    </v-main>

    <!-- フッター -->
    <v-footer app dark>@takuya</v-footer>
  </v-app>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      drawer: null,
      programingItem: ["Java", "PHP", "Javascript", "C#"],
      menus: [{ item: "Programing" }, { item: "Cooking" }, { item: "Travel" }],
      items: [
        { title: "Dashboard", icon: "mdi-view-dashboard" },
        { title: "Photos", icon: "mdi-image" },
        { title: "About", icon: "mdi-help-box" },
      ],
      right: null,
      nav_lists: [
        {
          name: "Getting Started",
          icon: "mdi-speedometer",
          lists: ["Quick Start", "Pre-made layouts"],
        },
        {
          name: "Customization",
          icon: "mdi-cogs",
        },
        {
          name: "Styles & animations",
          icon: "mdi-palette",
          lists: ["Colors", "Content", "Display"],
        },
        {
          name: "UI Components",
          icon: "mdi-view-dashboard",
          lists: ["API explorer", "Alerts"],
        },
        {
          name: "Directives",
          icon: "mdi-function",
        },
        {
          name: "Preminum themes",
          icon: "mdi-vuetify",
        },
      ],
    };
  },
};
</script>
