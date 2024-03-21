<template>
    <section class="course-area pb-120px">
        <div class="container">
            <div class="section-heading text-center">
                <h5 class="ribbon ribbon-lg mb-2">
                    Choose your desired courses
                </h5>
                <h2 class="section__title">
                    The world's largest selection of courses
                </h2>
                <span class="section-divider"></span>
            </div>
            <!-- end section-heading -->
            <ul
                class="nav nav-tabs generic-tab justify-content-center pb-4"
                id="myTab"
                role="tablist"
            >
                <template v-for="(type, index) in types" :key="index">
                    <li class="nav-item">
                        <a
                            class="nav-link"
                            :class="{ active: index === 0 }"
                            :id="
                                type.name.toLowerCase().replace(/\s+/g, '-') +
                                '-tab'
                            "
                            data-toggle="tab"
                            :href="
                                '#' +
                                type.name.toLowerCase().replace(/\s+/g, '-')
                            "
                            role="tab"
                            :aria-controls="
                                type.name.toLowerCase().replace(/\s+/g, '-')
                            "
                            :aria-selected="index === 0"
                        >
                            {{ type.name }}
                        </a>
                    </li>
                </template>

            </ul>
        </div>
        <!-- end container -->
        <div class="card-content-wrapper bg-gray pt-50px pb-120px">
            <div class="container">
                <div class="tab-content" id="myTabContent">

                    <template v-for="(type, index) in types" :key="index">
                        <div
                            class="tab-pane fade"
                            :class="{ 'show active': index === 0 }"
                            :id="type.name.toLowerCase().replace(/\s+/g, '-')"
                            role="tabpanel"
                            :aria-labelledby="type.name.toLowerCase().replace(/\s+/g, '-') + '-tab'"
                        >
                             <div class="row">
                            <div
                                v-for="(course, index) in courses"
                                :key="index"
                                class="col-lg-4 responsive-column-half"
                            >
                                <div
                                    class="card card-item card-preview"
                                    data-tooltip-content="#tooltip_content_1"
                                >
                                    <div class="card-image">
                                        <a
                                            href="course-details.html"
                                            class="d-block"
                                        >
                                            <img
                                                class="card-img-top lazy"
                                                :src="course.image"
                                                data-src="/frontend/images/img8.jpg"
                                                alt="Card image cap"
                                            />
                                        </a>
                                        <div class="course-badge-labels">
                                            <div class="course-badge">
                                                Bestseller
                                            </div>
                                            <div class="course-badge blue">
                                                -39%
                                            </div>
                                        </div>
                                    </div>
                                    <!-- end card-image -->
                                    <div class="card-body">
                                        <h6
                                            class="ribbon ribbon-blue-bg fs-14 mb-3"
                                        >
                                            All Levels
                                        </h6>
                                        <h5 class="card-title">
                                            <router-link :to="course.link">{{
                                                course.title
                                            }}</router-link>
                                        </h5>
                                        <p class="card-text">
                                            <router-link :to="course.link">{{
                                                course.teacher
                                            }}</router-link>
                                        </p>
                                        <div
                                            class="rating-wrap d-flex align-items-center py-2"
                                        >
                                            <div class="review-stars">
                                                <span class="rating-number">{{
                                                    course.rating
                                                }}</span>
                                                <span class="la la-star"></span>
                                                <span class="la la-star"></span>
                                                <span class="la la-star"></span>
                                                <span class="la la-star"></span>
                                                <span
                                                    class="la la-star-o"
                                                ></span>
                                            </div>
                                            <span class="rating-total pl-1"
                                                >({{
                                                    course.totalRating
                                                }})</span
                                            >
                                        </div>
                                        <!-- end rating-wrap -->
                                        <div
                                            class="d-flex justify-content-between align-items-center"
                                        >
                                            <p
                                                class="card-price text-black font-weight-bold"
                                            >
                                                {{ course.currentPrice }}
                                                <span
                                                    class="before-price font-weight-medium"
                                                    >{{
                                                        course.beforePrice
                                                    }}</span
                                                >
                                            </p>
                                            <div
                                                class="icon-element icon-element-sm shadow-sm cursor-pointer"
                                                title="Add to Wishlist"
                                            >
                                                <i class="la la-heart-o"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- end card-body -->
                                </div>
                                <!-- end card -->
                            </div>
                        </div>
                            
                        </div>
                        
                    </template>

                </div>
                <!-- end tab-content -->
                <div class="more-btn-box mt-4 text-center">
                    <a href="course-grid.html" class="btn theme-btn"
                        >Browse all Courses
                        <i class="la la-arrow-right icon ml-1"></i
                    ></a>
                </div>
                <!-- end more-btn-box -->
            </div>
            <!-- end container -->
        </div>
        <!-- end card-content-wrapper -->
    </section>
</template>

<script>
export default {
    name: "Courses",
    data() {
        return {
            types: [
                {
                    name: "Development",
                },
                {
                    name: "Programming",
                },
                {
                    name: "Cooking",
                },
            ],
            courses: [
                {
                    image: "/frontend/images/img8.jpg",
                    title: "The Business Course 2021",
                    teacher: "Jose Portilla",
                    link: "/course-details",
                    rating: "4.4",
                    totalRating: "20,230",
                    currentPrice: "12.99",
                    beforePrice: "125",
                },
                {
                    image: "/frontend/images/img8.jpg",
                    title: "The Laravel HMVC Course 2022",
                    teacher: "Abul kalam Azad",
                    link: "/course-details",
                    rating: "4.9",
                    totalRating: "20,230",
                    currentPrice: "12.99",
                    beforePrice: "125",
                },
                {
                    image: "/frontend/images/img8.jpg",
                    title: "The MSSQL Course 2022",
                    teacher: "Imam Masum",
                    link: "/course-details",
                    rating: "4.9",
                    totalRating: "20,230",
                    currentPrice: "12.99",
                    beforePrice: "125",
                },
            ],
        };
    },
};
</script>

<style></style>
