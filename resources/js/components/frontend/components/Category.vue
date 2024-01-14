<template>
    <section class="category-area pb-90px">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-9">
                    <div class="category-content-wrap">
                        <div class="section-heading">
                            <h5 class="ribbon ribbon-lg mb-2">Categories</h5>
                            <h2 class="section__title">Popular Categories</h2>
                            <span class="section-divider"></span>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="category-btn-box text-right">
                        <router-link to="/categories" class="btn theme-btn">
                            All Categories
                            <i class="la la-arrow-right icon ml-1"></i>
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="category-wrapper mt-30px">
                <div class="row">
                    <div
                        v-for="(category, index) in categories"
                        :key="index"
                        class="col-lg-4 responsive-column-half"
                    >
                        <div class="category-item">
                            <img
                                class="cat__img lazy"
                                :src="category.image"
                                data-src="images/img-loading.png"
                                alt="Category image"
                            />
                            <div class="category-content">
                                <div class="category-inner">
                                    <h3 class="cat__title">
                                        <router-link :to="category.link">{{
                                            category.title
                                        }}</router-link>
                                    </h3>
                                    <p class="cat__meta">
                                        {{ category.courses }} courses
                                    </p>
                                    <router-link
                                        :to="category.link"
                                        class="btn theme-btn theme-btn-sm theme-btn-white"
                                    >
                                        Explore<i
                                            class="la la-arrow-right icon ml-1"
                                        ></i>
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "Category",
    data() {
        return {
            categories: [
                {
                    title: "Business Study",
                    image: "/frontend/images/img1.jpg",
                    link: "/business-study",
                    courses: 9,
                },
                {
                    title: "Art & Design",
                    image: "/frontend/images/img2.jpg",
                    link: "/art-design",
                    courses: 7,
                },
                {
                    title: "Web Development",
                    image: "/frontend/images/img3.jpg",
                    link: "/web-development",
                    courses: 8,
                },
                {
                    title: "Health & Fitness",
                    image: "/frontend/images/img4.jpg",
                    link: "/health-fitness",
                    courses: 6,
                },
                {
                    title: "Photography",
                    image: "/frontend/images/img5.jpg",
                    link: "/photography",
                    courses: 7,
                },
                {
                    title: "Mathematics",
                    image: "/frontend/images/img6.jpg",
                    link: "/mathematics",
                    courses: 8,
                },
            ],
        };
    },
};
</script>

<style></style>
