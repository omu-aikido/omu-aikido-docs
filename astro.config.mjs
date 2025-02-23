// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import markdoc from '@astrojs/markdoc';

// https://astro.build/config
export default defineConfig({
    integrations: [
        markdoc(),
        starlight({
            title: "OMU-AIKIDO Docs",
            defaultLocale: "root",
            locales: {
                root: {
                    label: "日本語",
                    lang: "ja",
                },
            },
            social: {
                github: "https://github.com/omu-aikido",
            },
            sidebar: [
                {
                    label: "Start Up",
                    items: [
                        { label: "ようこそ", link: "/start-up/welcome" },
                        { label: "サインアップ", link: "/start-up/sign-up" },
                        { label: "アカウント", link: "/start-up/account" },
                    ],
                },
                {
                    label: "Guides",
                    autogenerate: { directory: "guides" },
                },
                {
                    label: "Admin",
                    autogenerate: { directory: "admin" },
                },
                {
                    label: "Reference",
                    items: [
                        { label: "開発を始める", link: "/reference/" },
                        { label: "Gitの使い方", link: "/reference/git" },
                        { label: "GitHubの使い方", link: "/reference/github" },
                        {
                            label: "内部仕様",
                            items: [
                                {
                                    label: "データベース",
                                    autogenerate: {
                                        directory: "/reference/code/db",
                                    },
                                },
                            ],
                        },
                    ],
                },
            ],
        }),
    ],
});
