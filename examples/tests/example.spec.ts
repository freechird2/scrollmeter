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

test('scrollmeter bar width matches scroll ratio', async ({ page }) => {
  await page.goto('http://localhost:5173/scrollmeter/')

  // 전체 문서 높이와 뷰포트 높이 가져오기
  const { scrollHeight, clientHeight } = await page.evaluate(() => {
    return {
      scrollHeight: document.documentElement.scrollHeight,
      clientHeight: document.documentElement.clientHeight,
    }
  })

  // 100px 스크롤
  await page.evaluate(() => window.scrollBy(0, 100))

  // bar 요소의 width 가져오기
  const barElement = page.locator('[class*="scrollmeter_bar"]')
  const barWidth = await barElement.evaluate((el) => {
    return window.getComputedStyle(el).width
  })

  // 예상되는 width 계산 (100px 스크롤 / (전체 높이 - 뷰포트 높이) * 100)
  const expectedRatio = 100 / (scrollHeight - clientHeight)
  const expectedWidth = `${expectedRatio * 100}%`

  // width 비교
  expect(barWidth).toBe(expectedWidth)
})
