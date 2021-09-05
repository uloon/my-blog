import VueRouter from 'vue-router'
// 引入组件
import AddBlog from '../pages/AddBlog'
import ShowBlogs from '../pages/ShowBlogs'
import SingleBlog from '../pages/SingleBlog'
import EditBlog from '../pages/EditBlog'
const router = new VueRouter({
    routes: [
        {
            path: '/addblog',
            component: AddBlog,
        },
        {
            path: '/',
            component: ShowBlogs,
        },
        {
            path: '/single-blog/:id',
            name: 'singleBlog',
            component: SingleBlog
        },
        {
            path: '/edit/:id',
            name: 'editBlog',
            component: EditBlog,
        },
    ]
})

export default router