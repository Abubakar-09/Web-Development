import express from 'express'
import blogs from '../data/vlogger.js'

let router = express.Router()

router.get('/', (req, res) => {
    res.render('home')
})

router.get('/blogPost', (req, res) => {
    res.render('blogPost', { blogs: blogs })
})

router.get('/blogPost/:slug', (req, res) => {
    let blog = blogs.find((e) => {
        return e.slug == req.params.slug
    })

    if (!blog) {
        blog = {
            title: "no such Article exists!",
            desc: "no such Article exists!",
            slug:"none"
        }
    }

    res.render('Post'
        ,
        {
            title: blog.title,
            desc: blog.desc,
            slug:blog.slug
        }
    )
})

export default router;