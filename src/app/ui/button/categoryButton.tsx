import React from 'react'
import { Button } from "antd";

export default function categoryButton(Props) {
    return(
        <Button type="default"
                size="large"
                className="categoryButton"
                >
            {Props.categoryName}
        </Button>
        )
    }