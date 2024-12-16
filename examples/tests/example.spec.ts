import { test, expect } from '@playwright/test'

test('scrollmeter elements exist', async ({ page }) => {
  await page.goto('http://localhost:5173/scrollmeter/')

  // class가 'scrollmeter'를 포함하는 요소 찾기
  const scrollmeterContainer = page.locator('[class*="scrollmeter_container"]')
  // 화면에 존재 하는지
  await expect(scrollmeterContainer).toBeVisible()

  // 배경 색상 확인
  const backgroundColor = await scrollmeterContainer.evaluate((el) => {
    return window.getComputedStyle(el).backgroundColor
  })

  // 배경 색상 확인
  expect(backgroundColor).toBe('rgba(0, 0, 0, 0)')
})

test('scrollmeter bar elements exist', async ({ page }) => {
  await page.goto('http://localhost:5173/scrollmeter/')

  await page.evaluate(() => window.scrollBy(0, 100))

  // 스크롤 후 바 요소 존재 확인
  const barElement = page.locator('[class*="scrollmeter_bar"]')
  await expect(barElement).toBeVisible()

  // 바 요소의 색상 확인
  const barColor = await barElement.evaluate((el) => {
    return window.getComputedStyle(el).backgroundColor
  })

  expect(barColor).toBe('rgba(74, 144, 226, 0.9)')
})
