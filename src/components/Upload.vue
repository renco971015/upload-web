<template>
    <v-container>
        <v-row class="text-center">
            <h1>文件上传</h1>
            <v-file-input
                    truncate-length="15"
                    v-model="fileInfo"
                    @change="uploadFile"
                    :disabled="loading.uploadIsLoading"
                    :loading="loading.uploadIsLoading"
            ></v-file-input>
        </v-row>
        <z-notify ref="notify"></z-notify>
    </v-container>
</template>

<script>
    import {
        uploadRequest
    } from '@/api/uploadApi'

    export default {
        name: 'UpLoad',

        data: () => ({
            loading: {
                uploadIsLoading: false,
            },
            fileInfo: null,
            ecosystem: [
                {
                    text: 'vuetify-loader',
                    href: 'https://github.com/vuetifyjs/vuetify-loader',
                },
                {
                    text: 'github',
                    href: 'https://github.com/vuetifyjs/vuetify',
                },
                {
                    text: 'awesome-vuetify',
                    href: 'https://github.com/vuetifyjs/awesome-vuetify',
                },
            ],
            importantLinks: [
                {
                    text: 'Documentation',
                    href: 'https://vuetifyjs.com',
                },
                {
                    text: 'Chat',
                    href: 'https://community.vuetifyjs.com',
                },
                {
                    text: 'Made with Vuetify',
                    href: 'https://madewithvuejs.com/vuetify',
                },
                {
                    text: 'Twitter',
                    href: 'https://twitter.com/vuetifyjs',
                },
                {
                    text: 'Articles',
                    href: 'https://medium.com/vuetify',
                },
            ],
            whatsNext: [
                {
                    text: 'Explore components',
                    href: 'https://vuetifyjs.com/components/api-explorer',
                },
                {
                    text: 'Select a layout',
                    href: 'https://vuetifyjs.com/getting-started/pre-made-layouts',
                },
                {
                    text: 'Frequently Asked Questions',
                    href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions',
                },
            ],
        }),
        methods: {
            uploadFile() {
                console.log("------------------")
                this.loading.uploadIsLoading = true;
                console.log(this.fileInfo,"fileInfo------------------")
                var formData = new window.FormData();
                formData.append('file', this.fileInfo);
                console.log(this.fileInfo.name,"--------------")
                console.log(formData,"formData")
                uploadRequest(formData).then(() => {
                    this.loading.uploadIsLoading = false;
                    this.$refs.notify.show("文件上传成功", {timeout: 1000, color: 'success'});
                    this.uploadDialog = false;
                    this.query();
                }).catch(() => {
                    this.loading.uploadIsLoading = false;
                });
            }
        },
    }
</script>
