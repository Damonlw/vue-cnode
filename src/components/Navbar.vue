<template lang="html">
  <div class="navbar">
		<div class="container">
			<div class="nav-left">
        <img @click="jumpToHome" src="../assets/cnode.png" >
        <form class="form-style" action="http://www.baidu.com/baidu" target="_blank">
          <input type="text"  v-model="searchText" name="word" @keyup.submit="onSearch()">
        </form>
			</div>
			<ul class="right-ul">
				<li @click="jumpToHome">首页</li>
				<li @click="jumpToNoob">新手入门</li>
				<li @click="jumpToApi">API</li>
				<li @click="jumpToAbout">关于</li>
				<li class="register"><a href="https://github.com">注册</a></li>
				<li @click="jumpToLogin">登录</li>
			</ul>
		</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      searchText: ''
    }
  },
  methods: {
    onSearch(){
      console.log(this.searchText);
      let data = BaiduHttps.useHttps();
      if (data.s === 0) {
        return true;
      }else {
        formname.action = 'https://www.baidu.com/baidu' + '?ssl_s=1&ssl_c' + data.ssl_code;
        return true;
      }
    },
    jumpToHome(){
      this.$router.push('/')
    },
    jumpToNoob(){
      this.$router.push('/getstart')
    },
    jumpToApi(){
      this.$router.push('/api')
    },
    jumpToAbout(){
      this.$router.push('/about')
    },
    jumpToLogin(){
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="less">
.navbar {
	width: 100%;
	background: #444;
	font-size: 13px;

	.container {
    width: 90%;
		height: 50px;
    margin: 0 auto;
    max-width: 1400px;
		display: flex;
		align-items: center;
		justify-content: space-between;

		.nav-left {
			width: 373px;
			display: flex;
			align-items: center;
			justify-content: space-between;

			img {
				width: 120px;
				height: 28px;
				cursor: pointer;
				position: relative;
				top: -2px;
			}

			input {
				width: 206px;
				height: 20px;
				padding: 3px 5px 3px 22px;
		    color: #666;
		    border: 0;
		    margin-top: 2px;
				font-weight: 400;
				border-radius: 15px;
				outline: 0;
				background: url(../assets/query.png) 4px 4px no-repeat #888;
		    transition: all .5s;

				&:hover {
					background: url(../assets/query.png) 4px 4px no-repeat #fff;
				}
				&:focus {
					background: url(../assets/query.png) 4px 4px no-repeat #fff;
				}
			}
		}
		.right-ul {
			display: flex;
			align-items: center;
			color: #ccc;
			li {
				cursor: pointer;
				padding: 0 15px;

				&:hover {
					color: #fff;
				}
			}
      .register {
        a {
          text-decoration: none;
          color: #ccc;
          &:hover {
            color: #fff;
            cursor: pointer;
          }
        }
      }
		}
	}
}


@media screen and (max-width: 980px) {
  .navbar {
  	width: 100%;
  	background: #444;
  	font-size: 13px;

  	.container {
      width: 90%;
  		height: auto;
      margin: 0 auto;
      max-width: 1400px;
  		display: block;
      padding-top: 9px;

  		.nav-left {
  			width: 373px;
  			display: flex;
  			align-items: center;
  			justify-content: space-between;

  			img {
  				width: 120px;
  				height: 28px;
  				cursor: pointer;
  				position: relative;
  				top: -2px;
  			}

  			input {
  				width: 206px;
  				height: 20px;
  				padding: 3px 5px 3px 22px;
  		    color: #666;
  		    border: 0;
  		    margin-top: 2px;
  				font-weight: 400;
  				border-radius: 15px;
  				outline: 0;
  				background: url(../assets/query.png) 4px 4px no-repeat #888;
  		    transition: all .5s;

  				&:hover {
  					background: url(../assets/query.png) 4px 4px no-repeat #fff;
  				}
  				&:focus {
  					background: url(../assets/query.png) 4px 4px no-repeat #fff;
  				}
  			}
  		}
  		.right-ul {
  			display: flex;
  			align-items: center;
  			color: #ccc;
        padding: 10px 0 15px 0;

  			li {
  				cursor: pointer;
  				padding: 0 15px;

  				&:hover {
  					color: #fff;
  				}
  			}
        .register {
          a {
            text-decoration: none;
            color: #ccc;
            &:hover {
              color: #fff;
              cursor: pointer;
            }
          }
        }
  		}
  	}
  }
}
@media screen and (max-width: 430px) {
  .navbar {
    width: 100%;
    background: #444;
    font-size: 13px;

    .container {
      width: 90%;
      height: auto;
      margin: 0 auto;
      max-width: 1400px;
      display: block;
      padding-top: 9px;

      .nav-left {
        width: 373px;
        display: block;
        align-items: center;
        justify-content: space-between;

        img {
          display: block;
          width: 120px;
          height: 28px;
          margin: 0 auto;
          cursor: pointer;
          position: relative;
          top: -2px;
        }

        input {
          display: block;
          width: 206px;
          height: 20px;
          padding: 3px 5px 3px 22px;
          color: #666;
          border: 0;
          margin-top: 2px;
          font-weight: 400;
          border-radius: 15px;
          outline: 0;
          background: url(../assets/query.png) 4px 4px no-repeat #888;
          transition: all .5s;
          margin: 2px auto 0 auto;

          &:hover {
            background: url(../assets/query.png) 4px 4px no-repeat #fff;
          }
          &:focus {
            background: url(../assets/query.png) 4px 4px no-repeat #fff;
          }
        }
      }
      .right-ul {
        display: flex;
        align-items: center;
        color: #ccc;
        padding: 10px 0 15px 0;

        li {
          cursor: pointer;
          padding: 0 15px;
          white-space: nowrap;

          &:hover {
            color: #fff;
          }
        }
        .register {
          a {
            text-decoration: none;
            color: #ccc;
            &:hover {
              color: #fff;
              cursor: pointer;
            }
          }
        }
      }
    }
  }
}
</style>
