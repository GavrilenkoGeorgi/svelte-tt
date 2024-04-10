import { expect, test } from '@playwright/test'

test('index page has expected h1', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByRole('heading', { name: 'Svelte kit test task' })).toBeVisible()
})

test('derived state page has expected h1', async ({ page }) => {
  await page.goto('/derived')
  await expect(page.getByRole('heading', { name: 'Derived store example' })).toBeVisible()
})

test('public API page has expected h1', async ({ page }) => {
  await page.goto('/posts')
  await expect(page.getByRole('heading', { name: 'Public API posts' })).toBeVisible()
})

test('single post page has expected h1', async ({ page }) => {
  await page.goto('/posts/1')
  await expect(page.getByRole('heading', { name: 'His mother had always taught him' })).toBeVisible()
})

test.only('store values can be changed', async ({ page }) => {
  await page.goto('/derived')
  const firstNumInput = page.locator('#firstNum')
  const secondNumInput = page.locator('#secondNum')
  const thirdNumInput = page.locator('#thirdNum')

  firstNumInput.fill('2')
  await expect(firstNumInput).toHaveValue('2')

  secondNumInput.fill('3')
  await expect(secondNumInput).toHaveValue('3')

  thirdNumInput.click()
  await expect(page.getByText('5')).toBeVisible()
})
