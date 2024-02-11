"use client"
import React, { FC, useState } from "react"
import Heading from "./utils/Heading"

interface Props{ }

const Page: FC<Props> = (props) => {
  return (
    <div>
      <Heading title="e-Shikhon" description="Learning" keywords="React,Fron end ," />
    </div>
  )
}

export default Page