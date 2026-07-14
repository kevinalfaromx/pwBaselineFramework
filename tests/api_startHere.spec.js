// @ts-check
import { test, expect } from '@playwright/test';
import { API } from '../page_model/api';

const url = 'https://api.restful-api.dev/objects';
//const auth = `Basic VGVzdFVzZXI4NjQ6fXorbjJkVmF5L1Jz`;
const accept = 'application/json';

test('Verify 200 - GET Devices', async ({ request }) => {

  const response = await request.get(url, {
    headers: {
      //'Authorization': auth,
      'Accept': accept
    },
  });

  expect(response.status()).toBe(200);
  const data = await response.json();
  expect(data).not.toBeNull();
});

test('Verify 200 - GET Devices by ID', async ({ request }) => {

  const response = await request.get(url + '?id=1', {
    headers: {
      //'Authorization': auth,
      'Accept': accept
    },
  });

  expect(response.status()).toBe(200);
  const data = await response.json();
  expect(data).not.toBeNull();
});

test('Verify 200 - GET Devices another way', async ({ request }) => {
  const endpointCall = new API(request);
  const response = await endpointCall.getDevices();

  expect(response.status()).toBe(200);
  const data = await response.json();
  expect(data).not.toBeNull();

});

test('Verify 200 - GET Devices by ID another way', async ({ request }) => {
  const endpointCall = new API(request);
  const response = await endpointCall.getDevicesById('1');

  expect(response.status()).toBe(200);
  const data = await response.json();
  expect(data).not.toBeNull();
  expect(data.id).toBe('1');
  expect(data.name).toBe('Google Pixel 6 Pro');
  expect(data.data.color).toBe('Cloudy White');
});