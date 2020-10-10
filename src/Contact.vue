<template>
    <main class="contact">
        <h1>Contact</h1>
        <p >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, libero ut! Laudantium quaerat, perspiciatis expedita, dolores labore assumenda quo molestiae quos odio nihil minus rem, voluptate id dignissimos? Laboriosam, est.</p>
        <div class="contact-form">
            <h4>Get in Touch</h4>
            <form action="" method="post" class="contact-form" netlify> 
                <div class="single-input"> 
                    <label for="name">Name<span>*</span></label>
                    <input type="text" name="name">
                </div>
                <div class="single-input"> 
                    <label for="email">Email<span>*</span></label>
                    <input type="email" name="email">
                </div>
                <div class="single-input"> 
                    <label for="message">Type your message </label>
                    <textarea name="message" id="message" cols="30" rows="6"></textarea>
                </div>
                <div class="single-input"> 
                    <input type="submit" value="send message">
                </div>
            </form>
        </div>
    </main>
</template>