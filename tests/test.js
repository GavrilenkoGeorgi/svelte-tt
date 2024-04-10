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
