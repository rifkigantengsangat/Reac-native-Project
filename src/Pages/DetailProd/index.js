import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeaderDetailComponent from '../../components/HeaderDetailComponent'
import CardDetailComponent from '../../components/CardDetailComponent'

const DetailProd = () => {
  return (
    <SafeAreaView>
        <ScrollView>
     <HeaderDetailComponent/>
     <CardDetailComponent/>
     </ScrollView>
    </SafeAreaView>
  )
}

export default DetailProd

const styles = StyleSheet.create({
    flex:1,
})