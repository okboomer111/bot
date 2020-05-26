const isImageUrl = require('is-image-url');
const fetch = require("node-fetch")

const birbCache = new Map()
const catCache = new Map()
const dogCache = new Map()
const rabbitCache = new Map()
const snekCache = new Map()

const birbLinks = ["https://www.reddit.com/r/birb.json?limit=777", 
    "https://www.reddit.com/r/budgies.json?limit=777",
    "https://www.reddit.com/r/parrots.json?limit=777"]
const catLinks = ["https://www.reddit.com/r/cat.json?limit=777",
    "https://www.reddit.com/r/kittens.json?limit=777"]
const dogLinks = ["https://www.reddit.com/r/dog.json?limit=777",
    "https://www.reddit.com/r/corgi.json?limit=777",
    "https://www.reddit.com/r/dogpictures.json?limit=777",
    "https://www.reddit.com/r/goldenretrievers.json?limit=777",
    "https://www.reddit.com/r/shiba.json?limit=777"]
const rabbitLinks = ["https://www.reddit.com/r/rabbits.json?limit=777"]
const snekLinks = ["https://www.reddit.com/r/snek.json?limit=777"]


setTimeout( async () => {

    //BIRB CACHE
    for (link of birbLinks) {
        const res = await fetch(link).then(a => a.json())
        
        const allowed = res.data.children.filter(post => !post.data.is_self)

        if (allowed) {
            birbCache.set(link, allowed)
        } else {
            console.error("no images @ " + link)
        }
    }
    console.log("\x1b[32m[" + getTimestamp() + "] birb cache loaded\x1b[37m")
    exports.birbCache = birbCache

    //CAT CACHE
    for (link of catLinks) {
        const res = await fetch(link).then(a => a.json())
        
        const allowed = res.data.children.filter(post => !post.data.is_self)

        if (allowed) {
            catCache.set(link, allowed)
        } else {
            console.error("no images @ " + link)
        }
    }
    console.log("\x1b[32m[" + getTimestamp() + "] cat cache loaded\x1b[37m")
    exports.catCache = catCache

    //DOG CACHE
    for (link of dogLinks) {
        const res = await fetch(link).then(a => a.json())
        
        const allowed = res.data.children.filter(post => !post.data.is_self)

        if (allowed) {
            dogCache.set(link, allowed)
        } else {
            console.error("no images @ " + link)
        }
    }
    console.log("\x1b[32m[" + getTimestamp() + "] dog cache loaded\x1b[37m")
    exports.dogCache = dogCache

    //RABBIT CACHE
    for (link of rabbitLinks) {
        const res = await fetch(link).then(a => a.json())
        
        const allowed = res.data.children.filter(post => !post.data.is_self)

        if (allowed) {
            rabbitCache.set(link, allowed)
        } else {
            console.error("no images @ " + link)
        }
    }
    console.log("\x1b[32m[" + getTimestamp() + "] rabbit cache loaded\x1b[37m")
    exports.rabbitCache = rabbitCache

    //SNEK CACHE
    for (link of snekLinks) {
        const res = await fetch(link).then(a => a.json())
        
        const allowed = res.data.children.filter(post => !post.data.is_self)

        if (allowed) {
            snekCache.set(link, allowed)
        } else {
            console.error("no images @ " + link)
        }
    }
    console.log("\x1b[32m[" + getTimestamp() + "] snek cache loaded\x1b[37m")
    exports.snekCache = snekCache
}, 5000)

setInterval( async () => {
    console.log("\x1b[32m[" + getTimestamp() + "] img caches updating..\x1b[37m")

    //BIRB CACHE
    birbCache.clear()
    for (link of birbLinks) {
        const res = await fetch(link).then(a => a.json())
        
        const allowed = res.data.children.filter(post => !post.data.is_self)

        if (allowed) {
            birbCache.set(link, allowed)
        } else {
            console.error("no images @ " + link)
        }
    }
    console.log("\x1b[32m[" + getTimestamp() + "] birb cache loaded\x1b[37m")
    exports.birbCache = birbCache

    //CAT CACHE
    catCache.clear()
    for (link of catLinks) {
        const res = await fetch(link).then(a => a.json())
        
        const allowed = res.data.children.filter(post => !post.data.is_self)

        if (allowed) {
            catCache.set(link, allowed)
        } else {
            console.error("no images @ " + link)
        }
    }
    console.log("\x1b[32m[" + getTimestamp() + "] cat cache loaded\x1b[37m")
    exports.catCache = catCache

    //DOG CACHE
    dogCache.clear()
    for (link of dogLinks) {
        const res = await fetch(link).then(a => a.json())
        
        const allowed = res.data.children.filter(post => !post.data.is_self)

        if (allowed) {
            dogCache.set(link, allowed)
        } else {
            console.error("no images @ " + link)
        }
    }
    console.log("\x1b[32m[" + getTimestamp() + "] dog cache loaded\x1b[37m")
    exports.dogCache = dogCache

    //RABBIT CACHE
    rabbitCache.clear()
    for (link of rabbitLinks) {
        const res = await fetch(link).then(a => a.json())
        
        const allowed = res.data.children.filter(post => !post.data.is_self)

        if (allowed) {
            rabbitCache.set(link, allowed)
        } else {
            console.error("no images @ " + link)
        }
    }
    console.log("\x1b[32m[" + getTimestamp() + "] rabbit cache loaded\x1b[37m")
    exports.rabbitCache = rabbitCache

    //SNEK CACHE
    snekCache.clear()
    for (link of snekLinks) {
        const res = await fetch(link).then(a => a.json())
        
        const allowed = res.data.children.filter(post => !post.data.is_self)

        if (allowed) {
            snekCache.set(link, allowed)
        } else {
            console.error("no images @ " + link)
        }
    }
    console.log("\x1b[32m[" + getTimestamp() + "] snek cache loaded\x1b[37m")
    exports.snekCache = snekCache
}, 21600000)

module.exports = {

    birbCache,
    catCache,
    dogCache,
    rabbitCache,
    snekCache,

    getColor: function(member) {
        if (member.displayHexColor == "#000000") {
           return "#f8f8ff";
        } else {
            return member.displayHexColor;
        }
    },

    redditImage: async function(post, allowed)  {
        let image = post.data.url 

        if (image.includes("imgur.com/a/")) {
            post = allowed[Math.floor(Math.random() * allowed.length)]
            image = post.data.url
        }

        if (image.includes("imgur") && !image.includes("gif")) {
            image = "https://i.imgur.com/" + image.split("/")[3]
            if (!isImageUrl(image)) {
                image = "https://i.imgur.com/" + image.split("/")[3] + ".gif"
            }
            return image + "|" + post.data.title + "|" + post.data.permalink + "|" + post.data.author
        }

        if (image.includes("gfycat")) {

            const link = await fetch("https://api.gfycat.com/v1/gfycats/" + image.split("/")[3]).then(url => url.json())

            if (link.gfyItem) {
                image = link.gfyItem.max5mbGif
                return image + "|" + post.data.title + "|" + post.data.permalink + "|" + post.data.author
            }
        }

        let count = 0

        while (!isImageUrl(image)) {

            if (count >= 10) {
                console.log("couldnt find image @ " + post.data.subreddit_name_prefixed)
                return "lol"
            }

            count++

            post = allowed[Math.floor(Math.random() * allowed.length)]
            image = post.data.url

            if (image.includes("imgur.com/a/")) {
                post = allowed[Math.floor(Math.random() * allowed.length)]
                image = post.data.url
            }

            if (image.includes("imgur") && !image.includes("gif") && !image.includes("png")) {
                image = "https://i.imgur.com/" + image.split("/")[3]
                image = "https://i.imgur.com/" + image.split("/")[3] + ".png"
                if (!isImageUrl(image)) {
                    image = "https://i.imgur.com/" + image.split("/")[3] + ".gif"
                    return image + "|" + post.data.title + "|" + post.data.permalink + "|" + post.data.author
                }
            }
    
            if (image.includes("gfycat")) {
    
                const link = await fetch("https://api.gfycat.com/v1/gfycats/" + image.split("/")[3]).then(url => url.json())
    
                if (link) {
                    image = link.gfyItem.max5mbGif
                    return image + "|" + post.data.title + "|" + post.data.permalink + "|" + post.data.author
                }
            }
        }
        return image + "|" + post.data.title + "|" + post.data.permalink + "|" + post.data.author
    },

    getMember: function(message, memberName) {
        if (!message.guild) return null
        let target = message.guild.members.cache.find(member => {
            if (member.user.tag.slice(0, -5).toLowerCase() == memberName.toLowerCase()) {
                return member;
            }
        });

        if (!target) {
            target = message.guild.members.cache.find(member => {
                return member.displayName.toLowerCase().includes(memberName.toLowerCase()) || member.user.tag.toLowerCase().includes(memberName.toLowerCase());
            });
        }

        if (!target) {
            target = message.guild.members.cache.find(member => {
                return member.user.id == memberName;
            });
        }

        return target;
    },
    
    formatDate: function(date) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Intl.DateTimeFormat("en-US", options).format(date);
    }   
};

function getTimestamp() {
    const date = new Date();
    let hours = date.getHours().toString();
    let minutes = date.getMinutes().toString();
    let seconds = date.getSeconds().toString();
    
    if (hours.length == 1) {
        hours = "0" + hours;
    } 
    
    if (minutes.length == 1) {
        minutes = "0" + minutes;
    } 
    
    if (seconds.length == 1) {
        seconds = "0" + seconds;
    }
    
    const timestamp = hours + ":" + minutes + ":" + seconds;

    return timestamp
}