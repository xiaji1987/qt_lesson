<template>
  <div id="home=page">
    <NavigationBar />
    <MainNavgation />
    <LouPlus />
    <Bountique />
    <RecentlyRecommendCourse />
    <BaseCourse />
    <BackendCourse />
    <CloudComputeBigDataCourse />
    <TrainingCourse />
    <LearningCourse />
    <SiteDescription />
  </div>
</template>

<script>
import NavigationBar from '@/components/home_page/navigation_bar'
import MainNavgation from '@/components/home_page/main_navgation'
import LouPlus from '@/components/home_page/lou_plus'
import Bountique from '@/components/home_page/bountique'
import RecentlyRecommendCourse from '@/components/home_page/recently_recommend_course'
import BaseCourse from '@/components/home_page/base_course'
import BackendCourse from '@/components/home_page/backend_course'
import CloudComputeBigDataCourse from '@/components/home_page/cloud_compute_big_data_course'
import TrainingCourse from '@/components/home_page/training_course'
import LearningCourse from '@/components/home_page/learning_course'
import SiteDescription from '@/components/home_page/site_description'
export default {
  components: {
    NavigationBar,
    MainNavgation,
    LouPlus,
    Bountique,
    RecentlyRecommendCourse,
    BaseCourse,
    BackendCourse,
    CloudComputeBigDataCourse,
    TrainingCourse,
    LearningCourse,
    SiteDescription
  }
}
</script>

<style scoped>

</style>
