<template lang="html">
	<div class="main-container">
		<div class="container-panel"></div>
		<div class="container-sildebar">
			<div class="home-inner inner-margin-top">
				<div class="home-inner-title">个人信息</div>
				<div class="home-inner-content">
					<div class="author-content">
						<img :src="userData.avatar_url" >
						<span v-text="userData.loginname"></span>
					</div>
					<p class="black-color cancel-marigin">积分：{{ userData.score }}</p>
					<p class="black-color cancel-marigin">“ 这家伙很懒，什么个性签名都没有留下。”</p>
				</div>
			</div>
			<tag></tag>
		</div>
		</div>
	</div>
</template>

<script>
import tag from './Tag.vue'
import { mapState } from 'vuex'

export default {
	computed: {
		...mapState({
			userData: state => state.userData
		})
	},
	components: {
		tag
	}
}
</script>

<style lang="less">
</style>
