<template>
    <el-container class="layout">
        <el-aside class="side">
            <div class="header-logo">
                <img alt="" />
                <!-- <h1 v-if="!collapsed">{{IS_NN ? '牛牛社交后台' : 'MOOMOO社交后台'}}</h1> -->
            </div>
            <div class="menu-wrapper">
                <SnsSideBar />
            </div>
        </el-aside>
        <el-container class="container-wrapper">
            <el-header>
                <div>
                    <i
                        class="el-icon-s-unfold trigger"
                        v-if="collapsed"
                        @click="() => (collapsed = !collapsed)"
                    />
                    <i
                        class="el-icon-s-fold trigger"
                        v-else
                        @click="() => (collapsed = !collapsed)"
                    />
                </div>
                <div class="user-info">
                    <i class="el-icon-user"></i>
                    <!-- {{ userInfo.nick }} -->
                </div>
            </el-header>
            <el-main>
                <slot></slot>
            </el-main>
            <el-footer height="auto" v-if="isShowFooter"
                >FUTU © {{ new Date().getFullYear() }} Developed by Futu Web
                Team</el-footer
            >
        </el-container>
    </el-container>
</template>

<script setup>
import { ref } from "vue";
import { ElContainer, ElFooter, ElMain, ElHeader, ElAside } from 'element-plus'
import SnsSideBar from "@futuweb/snsbiz-comp/oa-menu/dist/vue3/SideBar.es5.js";
// import useCommData from "@/composables/useCommData";

// 登录用户信息
// const { userInfo } = useCommData();
// 是否为moomoo
// const IS_NN = ref(!IS_MOO);

let collapsed = ref(false);

let isShowFooter = ref(true);
</script>

<style lang="less" scoped>
@import '../style/common.less';

.el-container {
    display: flex;
    flex: auto;
    background: #f0f2f5;
    flex-direction: row;
    overflow: hidden;
    min-width: 1300px;

    &.layout {
        height: 100vh;

        .side{
            min-width: 230px;
        }

        .container-wrapper {
            flex-direction: column;
        }

        .el-aside {
            background-color: #2c343f;

            .menu-wrapper {
                height: calc(100% - 60px);
                overflow: auto;
                overflow-x: hidden;
                /*滚动条宽度*/
                &::-webkit-scrollbar {
                    width: 8px;
                }
                /* Handle样式 */
                &::-webkit-scrollbar-thumb {
                    border-radius: 10px;
                    background: rgba(255, 255, 255, 0.2);
                }
                /*当前窗口未激活的情况下*/
                &::-webkit-scrollbar-thumb:window-inactive {
                    background: rgba(255, 255, 255, 0.1);
                }
                /*hover到滚动条上*/
                &::-webkit-scrollbar-thumb:vertical:hover {
                    background-color: rgba(255, 255, 255, 0.3);
                }
                /*滚动条按下*/
                &::-webkit-scrollbar-thumb:vertical:active {
                    background-color: rgba(255, 255, 255.5);
                }
            }
                // .menus {
                //     min-width: calc(100% + 1px);
                //     min-height: calc(100% - 60px);
                // }

            .header-logo {
                position: relative;
                display: flex;
                align-items: center;
                justify-content: flex-start;
                padding: 14px;
                cursor: pointer;
                transition: padding 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
                background-color: #c65946;

                img {
                    display: inline-block;
                    height: 32px;
                    vertical-align: middle;
                }

                h1 {
                    display: inline-block;
                    height: 32px;
                    margin: 0 0 0 5px;
                    color: #fff;
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 32px;
                    vertical-align: middle;
                    animation: pro-layout-title-hide 0.3s;
                }
            }
        }

        .el-header {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: space-between;
            background-color: #e3746b;
            padding: 0;

            .trigger {
                font-size: 16px;
                line-height: 64px;
                padding: 0 24px;
                cursor: pointer;
                transition: color 0.3s;

                &:hover {
                    color: #1890ff;
                }
            }

            .user-info {
                margin-right: 60px;
                padding: 0 24px;
            }

            &::after {
                content: "正式";
                position: absolute;
                top: 10px;
                right: -30px;
                width: 106px;
                height: 26px;
                line-height: 26px;
                transform: rotate(45deg);
                text-align: center;
                color: #fff;
                background: red;
                font-size: 18px;
            }
        }

        .el-footer {
            padding: 10px 0;
            font-size: 14px;
            color: #999;
            text-align: center;
        }

        &.development {
            .el-aside {
                background-color: #67ae56;

                .header-logo {
                    background-color: rgba(255, 255, 255, 0.075);
                }
            }

            .el-header {
                background-color: #dcecd9;

                &::after {
                    content: "测试";
                    background: #67ae56;
                }
            }
        }
    }
}

@keyframes pro-layout-title-hide {
    0% {
        display: none;
        opacity: 0;
    }

    80% {
        display: none;
        opacity: 0;
    }

    to {
        display: unset;
        opacity: 1;
    }
}
</style>
