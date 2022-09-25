import axios from 'axios';
import { faker } from '@faker-js/faker';
import { AxiosHttpClient } from './axios-http-client';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

const makeSut = (): AxiosHttpClient => new AxiosHttpClient();

describe('AxiosHttpClient', () => {
  it('Should call axios with correct URL and verd', async () => {
    const url = faker.internet.url();
    const sut = makeSut();
    await sut.post({ url });

    expect(mockedAxios.post).toHaveBeenCalledWith(url);
  });
});
