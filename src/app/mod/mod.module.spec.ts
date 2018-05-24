import { ModModule } from './mod.module';

describe('ModModule', () => {
  let modModule: ModModule;

  beforeEach(() => {
    modModule = new ModModule();
  });

  it('should create an instance', () => {
    expect(modModule).toBeTruthy();
  });
});
