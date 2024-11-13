import { TestBed } from '@angular/core/testing';
import { Auth } from '@angular/fire/auth';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;
  let authMock: jasmine.SpyObj<Auth>;

  beforeEach(() => {
    authMock = jasmine.createSpyObj('Auth', ['currentUser']);
    
    TestBed.configureTestingModule({
      providers: [
        AuthService,
        { provide: Auth, useValue: authMock }
      ]
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return null when no user is logged in', () => {
    authMock.currentUser = null;
    expect(service.getCurrentUser()).toBeNull();
  });

  it('should return user object when user is logged in', () => {
    const mockUser = {
      uid: '123',
      email: 'test@example.com',
      displayName: 'Test User',
      photoURL: 'https://example.com/photo.jpg'
    };
    
    authMock.currentUser = mockUser;
    
    const result = service.getCurrentUser();
    expect(result).toEqual({
      uid: '123',
      email: 'test@example.com',
      displayName: 'Test User',
      photoURL: 'https://example.com/photo.jpg',
      role: 'contractor'
    });
  });
});